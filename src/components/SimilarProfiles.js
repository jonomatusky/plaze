import React, { useEffect, useState } from 'react'
import { Card, CardActionArea, Grid, Typography } from '@mui/material'
import ProfileListItem from 'components/ProfileListItem'
import { Link, useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import ResponsiveAvatar from 'components/ResponsiveAvatar'
import { getDatabase, onValue, ref } from 'firebase/database'

const SimilarProfiles = () => {
  const { id } = useParams()
  const [profiles, setProfiles] = useState([])

  const promotedProfileId = '-MqFRH6pQ_hdkUejidAD'
  const [promotedProfile, setPromotedProfile] = useState(null)

  const { profileImageUrl, name } = promotedProfile || {}

  useEffect(() => {
    const db = getDatabase()
    const bandRef = ref(db, 'bands/' + promotedProfileId)

    onValue(bandRef, snapshot => {
      if (snapshot.val()) {
        setPromotedProfile(snapshot.val())
      }
    })
  }, [promotedProfileId])

  useEffect(() => {
    const db = getDatabase()
    const usersRef = ref(db, 'users')

    onValue(usersRef, snapshot => {
      if (snapshot.val()) {
        const allProfiles = Object.keys(snapshot.val())

        const selectedProfiles = allProfiles
          .sort(() => 0.5 - Math.random())
          .slice(0, 5)
          .map(key => ({ id: key, ...snapshot.val()[key] }))
        setProfiles(selectedProfiles)
      }
    })
  }, [promotedProfileId, setProfiles, id])

  return (
    <>
      <Typography textTransform="uppercase">
        <b>Similar Profiles</b>
      </Typography>
      <Grid container mt={1}>
        {!!promotedProfile && (
          <Grid item xs={6} sm={12}>
            <Card elevation={0}>
              <CardActionArea
                component={Link}
                to={'/band/' + promotedProfileId}
              >
                <Box display="flex" flexWrap="none" p={1}>
                  <Box width="70px" pr={1} flexShrink={0}>
                    <ResponsiveAvatar avatarUrl={profileImageUrl} />
                  </Box>
                  <Box overflow="hidden">
                    <Typography
                      lineHeight={1.4}
                      sx={{
                        width: '100%',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      <b>{name}</b>
                    </Typography>
                    <Typography
                      fontSize={14}
                      lineHeight={1.2}
                      sx={{
                        width: '100%',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      Create AR Videos
                    </Typography>
                    <Typography
                      fontSize={12}
                      sx={{
                        width: '100%',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      <i>Promoted</i>
                    </Typography>
                  </Box>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        )}
        {profiles.map(profile => (
          <Grid item xs={6} sm={12} key={profile.id}>
            <ProfileListItem id={profile.id} item={profile} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default SimilarProfiles
