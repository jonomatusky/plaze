import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { Box, Container, Grid } from '@mui/material'
// import { Container, Divider, Grid, Typography } from '@mui/material'
// import { isIOS } from 'react-device-detect'

import SimilarProfiles from 'components/SimilarProfiles'
// import { Box } from '@mui/system'
// import GetAppButton from 'components/GetAppButton'

const ProfileLayout = () => {
  const { id } = useParams()

  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={2} justifyContent="center" pt={2} pb={2}>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={7}
            container
            spacing={2}
            alignContent="start"
          >
            <Outlet />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <SimilarProfiles id={id} />
          </Grid>
        </Grid>
        <Box width="100%" height="30px" />
      </Container>
      {/* {isIOS && ( */}
      {/* <Box
        position="fixed"
        bottom={0}
        right={0}
        left={0}
        zIndex={10}
        sx={{ bgColor: 'background.default' }}
      >
        <Divider fullWidth />
        <Box
          width="100%"
          p={2}
          pt={4}
          pb={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          // minHeight={100}
        >
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Typography textAlign="center">
                Get the Plaze app to create your own profile.
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <GetAppButton />
            </Grid>
          </Grid>
        </Box>
      </Box> */}

      {/* )} */}
    </>
  )
}
export default ProfileLayout
