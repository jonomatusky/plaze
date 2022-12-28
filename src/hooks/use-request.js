import { useState, useEffect, useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import * as client from 'util/client'
import { setError } from 'redux/alertSlice'

export const useRequest = () => {
  const dispatch = useDispatch()
  const [status, setStatus] = useState('idle')

  let activeAxiosSources = useRef([])

  const request = useCallback(
    async config => {
      setStatus('loading')

      const { quiet, ...rest } = config

      let token

      try {
        const CancelToken = axios.CancelToken
        const source = CancelToken.source()
        activeAxiosSources.current.push(source)

        const headers = {}

        if (token) {
          headers.Authorization = 'Bearer ' + token
        }

        let response = await client.request({
          cancelToken: source.token,
          headers,
          ...rest,
        })

        activeAxiosSources.current = activeAxiosSources.current.filter(
          reqCtrl => reqCtrl.token !== source.token
        )

        setStatus('succeeded')
        return response
      } catch (err) {
        if (!quiet) {
          dispatch(
            setError({
              message:
                err.message || 'An unknown error occured. Please try again.',
            })
          )
        }
        setStatus('failed')
        throw err
      }
    },
    [dispatch]
  )

  useEffect(() => {
    return () => {
      activeAxiosSources.current.forEach(source =>
        source.cancel('Operation canceled due to new request.')
      )
    }
  }, [])

  return { status, request }
}

export default useRequest
