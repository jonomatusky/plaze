import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material'

import BasicInfo from './components/PanelBasics/PanelBasics'
import { getDatabase, ref, onValue } from 'firebase/database'
import NotFound from 'components/NotFound'

const ViewBand = () => {
  const { id } = useParams()
  const [individual, setIndividual] = useState(null)

  const db = getDatabase()

  useEffect(() => {
    const userRef = ref(db, 'bands/' + id)

    onValue(userRef, snapshot => {
      setIndividual(snapshot.val())
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
      {individual === 'not found' && <NotFound />}
      {!!individual && individual !== 'not found' && (
        <BasicInfo individual={individual} />
      )}
    </>
  )
}
export default ViewBand
