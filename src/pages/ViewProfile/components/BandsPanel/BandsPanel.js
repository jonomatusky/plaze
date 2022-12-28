import { Grid, Typography } from '@mui/material'
import React from 'react'
import BandCard from './BandCard'

const BandsPanel = ({ bands }) => {
  return (
    <>
      {!!bands && bands.length > 0 && bands !== 'not found' && (
        <Grid
          item
          xs={12}
          container
          spacing={2}
          justifyContent="center"
          // pt={2}
          // pb={2}
        >
          <Grid item xs={12}>
            <Typography textTransform="uppercase">
              <b>Band & Artist Profiles</b>
            </Typography>
          </Grid>
          {bands.map(bandId => (
            <Grid item xs={12} key={bandId}>
              <BandCard id={bandId} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default BandsPanel
