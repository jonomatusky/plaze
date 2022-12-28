import React from 'react'
import { Grid, Box, Button, Typography, Link } from '@mui/material'
import Panel from 'layouts/Panel'
import { Mail } from '@mui/icons-material'

const PanelContact = ({ individual: { email } }) => {
  return (
    <>
      {!!email && (
        <Grid item xs={12}>
          <Panel>
            <Box p={2} textAlign="center">
              <Typography pb={1}>
                <b>Get in touch with the PR Team</b>
              </Typography>
              <Button
                color="primary"
                fullWidth
                variant="contained"
                endIcon={<Mail />}
                href={'mailto:' + email}
                target="_blank"
              >
                Contact
              </Button>
              <Box
                display="flex"
                flexWrap="none"
                alignItems="center"
                justifyContent="center"
                width="100%"
              >
                <Typography
                  fontSize={12}
                  pt={1}
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  overflow="hidden"
                >
                  <Link href={'mailto:' + email} target="_blank">
                    {email}
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Panel>
        </Grid>
      )}
    </>
  )
}

export default PanelContact
