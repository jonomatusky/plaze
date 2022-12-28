import React from 'react'
import { Box } from '@mui/material'
import LinkPreview from './LinkPreview'

const Highlight = ({ index, highlights }) => {
  const highlight = highlights[index] || {}
  const { url, image, title, outlet } = highlight

  return (
    <Box position="relative">
      <LinkPreview url={url} image={image} title={title} outlet={outlet} />
    </Box>
  )
}

export default Highlight
