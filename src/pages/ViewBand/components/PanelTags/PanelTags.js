import React from 'react'
import { Box, Chip, Grid, Typography } from '@mui/material'
import { Mic, TimerOutlined, OfflineBolt } from '@mui/icons-material'

import Panel from 'layouts/Panel'

const PanelTags = ({ individual }) => {
  const { mediaTrained, quickToBook, frequentSource } = individual
  const individualTags = individual?.tags || []

  const qualities = [
    { name: 'mediaTrained', label: 'Media Trained', Icon: Mic },
    { name: 'quickToBook', label: 'Quick to Book', Icon: TimerOutlined },
    { name: 'frequentSource', label: 'Frequent Source', Icon: OfflineBolt },
  ]

  let qualityList = []

  qualities.forEach(quality => {
    if (individual[quality.name]) {
      qualityList.push(quality.label)
    }
  })

  const hasTags = individualTags.length > 0
  const hasQualities = mediaTrained || quickToBook || frequentSource

  const showPanel = hasTags || hasQualities

  return (
    <>
      {!!showPanel && (
        <Grid item xs={12}>
          <Panel>
            <Box p={2} pb={1}>
              {!showPanel && (
                <Box pb={1}>
                  <Typography color="primary" variant="h6">
                    <b>Tags</b>
                  </Typography>
                </Box>
              )}
              {hasTags && (
                <Box display="flex" flexWrap="wrap">
                  {individualTags.map(tag => (
                    <Box pb={1} pr={1} key={tag.id}>
                      <Chip label={tag.name} color="primary" />
                    </Box>
                  ))}
                </Box>
              )}
              {hasQualities && (
                <Box display="flex" flexWrap="wrap">
                  {qualities.map(quality => {
                    const { Icon, name, label } = quality

                    return individual[quality.name] ? (
                      <Box pb={1} pr={1} key={name}>
                        <Chip
                          label={label}
                          color="secondary"
                          icon={<Icon fontSize="small" />}
                        />
                      </Box>
                    ) : null
                  })}
                </Box>
              )}
            </Box>
          </Panel>
        </Grid>
      )}
    </>
  )
}

export default PanelTags
