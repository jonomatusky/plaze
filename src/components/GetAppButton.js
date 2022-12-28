import React from 'react'
import { Button } from '@mui/material'

import { isAndroid } from 'react-device-detect'

const GetAppButton = () => {
  const appLink = isAndroid
    ? 'https://plazeapp.co/android-wait-list'
    : 'https://apps.apple.com/us/app/plaze-app/id1482674638'

  return (
    <Button
      sx={{ borderRadius: '100px' }}
      variant="contained"
      size="small"
      href={appLink}
    >
      Get the App
    </Button>
  )
}

export default GetAppButton
