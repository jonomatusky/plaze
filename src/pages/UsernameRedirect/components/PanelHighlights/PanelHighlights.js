import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import Highlight from './Highlight'
import Panel from 'layouts/Panel'

const PanelHighlights = ({ individual }) => {
  const highlights = individual.highlights

  return (
    <>
      {!!highlights && highlights.length > 0 && (
        <Grid item xs={12}>
          <Panel>
            <Box p={2}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography color="primary" variant="h6">
                    <b>Media Highlights</b>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  {highlights[0] ? (
                    <Highlight index={0} highlights={highlights} />
                  ) : (
                    <></>
                  )}
                </Grid>
                <Grid item xs={12} md={6}>
                  {highlights[1] ? (
                    <Highlight index={1} highlights={highlights} />
                  ) : (
                    <></>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Panel>
        </Grid>
      )}
    </>
  )
}

export default PanelHighlights
