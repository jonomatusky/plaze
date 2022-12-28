import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Panel from 'layouts/Panel'

const PanelBio = ({ individual }) => {
  const bio = individual.bio

  return (
    <>
      {!!bio && (
        <Grid item xs={12}>
          <Panel>
            <Box p={2}>
              <Typography color="primary" variant="h6">
                <b>Bio</b>
              </Typography>
              <Typography>{bio}</Typography>
            </Box>
          </Panel>
        </Grid>
      )}
    </>
  )
}

export default PanelBio
