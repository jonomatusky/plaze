import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Grid } from '@mui/material'

import BasicInfo from './components/PanelBasics/PanelBasics'
import PanelContact from './components/PanelContact/PanelContact'
import PanelTags from './components/PanelTags/PanelTags'
import PanelHighlights from './components/PanelHighlights/PanelHighlights'
import Loading from 'pages/LoadingPage/LoadingPage'
import {
  getDatabase,
  ref,
  onValue,
  query,
  orderByChild,
  equalTo,
} from 'firebase/database'
import NotFound from 'pages/NotFoundPage/NotFoundPage'

const ViewProfile = () => {
  const { username } = useParams()
  const navigate = useNavigate()
  const [individual, setIndividual] = useState(null)

  const db = getDatabase()

  useEffect(() => {
    const usersRef = ref(db, 'users')

    const user = query(usersRef, orderByChild('username'), equalTo(username))

    onValue(user, snapshot => {
      if (snapshot.val()) {
        snapshot.forEach(user => {
          navigate(`/profile/${user.key}`)
        })
      } else {
        setIndividual('not found')
      }
    })
  }, [db, username, navigate])

  return (
    <>
      {individual !== 'not found' && <Loading />}
      {individual === 'not found' && <NotFound />}
      {!!individual && individual !== 'not found' && (
        <Container maxWidth="sm">
          <Grid container spacing={2} justifyContent="center" pt={2} pb={2}>
            <Grid item xs={12} container spacing={2} alignContent="start">
              <BasicInfo individual={individual} />
              <PanelContact individual={individual} />
              <PanelTags individual={individual} />
              <PanelHighlights individual={individual} />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  )
}
export default ViewProfile
