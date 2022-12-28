import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppBar, Toolbar, Box, Divider } from '@mui/material'

import logo from 'assets/images/logo.svg'
import GetAppButton from 'components/GetAppButton'

const Header = () => {
  return (
    <>
      <AppBar elevation={0}>
        <Toolbar variant="dense">
          <Box display="flex" width="100%" alignItems="center">
            <Box flexGrow={1} display="flex" height="100%" alignItems="center">
              <a href="/" style={{ height: '30px' }}>
                <img src={logo} alt="logo" style={{ height: '100%' }} />
              </a>
            </Box>
            <Box flexGrow={0}>
              <GetAppButton />
            </Box>
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
      <main>
        <Toolbar />
        <Outlet />
      </main>
    </>
  )
}

export default Header
