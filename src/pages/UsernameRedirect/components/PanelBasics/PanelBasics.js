import React from 'react'
import { Grid, Box, Typography } from '@mui/material'

import ResponsiveAvatar from 'components/ResponsiveAvatar'
import Panel from 'layouts/Panel'
import ButtonIconLink from 'components/ButtonIconLink'

const PanelBasic = ({ individual }) => {
  const {
    profileImageUrl,
    name,
    city,
    state,
    title,
    bio,
    instagramLink,
    twitterLink,
    websiteLink,
    youtubeLink,
    facebookLink,
    bandcampLink,
    spotifyLink,
  } = individual || {}

  const links = [
    instagramLink,
    facebookLink,
    twitterLink,
    bandcampLink,
    websiteLink,
    spotifyLink,
    youtubeLink,
  ]

  return (
    <Grid item xs={12}>
      <Panel>
        <Box p={3}>
          <Grid container spacing={2} textAlign="center">
            <Grid item xs={12} textAlign="center">
              <Box width="100%">
                <Box maxWidth="125px" margin="auto">
                  <ResponsiveAvatar avatarUrl={profileImageUrl} />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} textAlign="center">
              {name && (
                <Typography variant="h6">
                  <b>{name}</b>
                </Typography>
              )}
              {title && <Typography>{title}</Typography>}
              {(!!city || !!state) && (
                <Typography variant="subtitle" color="text.secondary">
                  {city + (!!city && !!state ? ', ' : '') + state}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Box width="100%" display="flex" justifyContent="center">
                <Box
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="center"
                  alignItems="center"
                  maxWidth="250px"
                >
                  {links.map(
                    (link, index) =>
                      !!link && (
                        <Box mr={1} mb={1} key={index}>
                          <ButtonIconLink link={link} />
                        </Box>
                      )
                  )}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} textAlign="center">
              {!!bio && <Typography>{bio}</Typography>}
            </Grid>
          </Grid>
        </Box>
      </Panel>
    </Grid>
  )
}
export default PanelBasic
