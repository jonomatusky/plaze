import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActionArea, Typography } from '@mui/material'
import ResponsiveAvatar from './ResponsiveAvatar'

const ProfileListItem = ({ id, item }) => {
  // const [individual, setIndividual] = useState(null)

  const { city, state, name, profileImageUrl, intent, location } = item

  const itemLocation = !!location
    ? location
    : !!city || !!state
    ? city + (!!city && !!state ? ', ' : '') + state
    : null

  return (
    <Card elevation={0}>
      <CardActionArea component={Link} to={'/profile/' + id}>
        <Box display="flex" flexWrap="none" p={1}>
          <Box width="70px" pr={1} flexShrink={0}>
            <ResponsiveAvatar avatarUrl={profileImageUrl} />
          </Box>
          <Box overflow="hidden">
            <Typography
              lineHeight={1.4}
              sx={{
                width: '100%',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              <b>{name}</b>
            </Typography>
            {!!itemLocation && (
              <Typography
                fontSize={14}
                lineHeight={1.2}
                sx={{
                  width: '100%',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {itemLocation}
              </Typography>
            )}
            {!!intent && (
              <Typography
                fontSize={14}
                sx={{
                  width: '100%',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                <i>{intent}</i>
              </Typography>
            )}
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default ProfileListItem
