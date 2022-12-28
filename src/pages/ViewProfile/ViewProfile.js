import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import BasicInfo from './components/PanelBasics/PanelBasics'
import { getDatabase, ref, onValue } from 'firebase/database'
import NotFound from 'components/NotFound'
import BandsPanel from './components/BandsPanel/BandsPanel'
import { Box, CircularProgress } from '@mui/material'

const ViewProfile = () => {
  const { id } = useParams()
  // const { status } = useFetchIndividual(pid)
  const [individual, setIndividual] = useState(null)
  const [bands, setBands] = useState([])

  const db = getDatabase()

  useEffect(() => {
    const userRef = ref(db, 'users/' + id)

    onValue(userRef, snapshot => {
      if (snapshot.val()) {
        setIndividual(snapshot.val())
      } else {
        setIndividual('not found')
      }
    })
  }, [db, id])

  useEffect(() => {
    const userBandRef = ref(db, 'user-bands/' + id)

    onValue(userBandRef, snapshot => {
      if (snapshot.val()) {
        setBands(Object.keys(snapshot.val()))
      } else {
        setBands('not found')
      }
    })
  }, [db, id])

  return (
    <>
      {!individual && (
        <Box
          height="100%"
          width="100%"
          minHeight="400px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <CircularProgress color="primary" />
        </Box>
      )}
      {individual === 'not found' && (
        <Box minHeight="400px" width="100%">
          <NotFound />
        </Box>
      )}
      {!!individual && individual !== 'not found' && (
        <>
          <BasicInfo individual={individual} />
          <BandsPanel bands={bands} />
        </>
      )}
    </>
  )
}
export default ViewProfile
