import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faTiktok,
  faSpotify,
  faYoutube,
  faSoundcloud,
  faBandcamp,
  faApple,
} from '@fortawesome/free-brands-svg-icons'
import { Button } from '@mui/material'

const ButtonIconLink = ({ link }) => {
  const types = [
    {
      name: 'instagram.com',
      fontAwesome: faInstagram,
      display: 'Instagram',
    },
    { name: 'facebook.com', fontAwesome: faFacebook, display: 'Facebook' },
    { name: 'twitter.com', fontAwesome: faTwitter, display: 'Twitter' },
    { name: 'tiktok.com', fontAwesome: faTiktok, display: 'TikTok' },
    { name: 'spotify.com', fontAwesome: faSpotify, display: 'Spotify' },
    {
      name: 'music.apple.com',
      fontAwesome: faApple,
      display: 'Apple Music',
    },
    { name: 'youtube.com', fontAwesome: faYoutube, display: 'Youtube' },
    { name: 'youtu.be', fontAwesome: faYoutube, display: 'Youtube' },
    {
      name: 'soundcloud.com',
      fontAwesome: faSoundcloud,
      display: 'Soundcloud',
    },
    { name: 'bandcamp.com', fontAwesome: faBandcamp, display: 'Bandcamp' },
  ]

  let type = types.find(type => {
    return (link || '').toLowerCase().indexOf(type.name) > -1
  })

  if (!type) {
    type = { name: 'website', fontAwesome: faLink, display: 'Website' }
  }

  const adjustedLink = (
    /^https?:\/\//i.test(link) || /^http?:\/\//i.test(link)
      ? link
      : 'http://' + link
  ).toLowerCase()

  return (
    <Button
      target="_blank"
      variant="contained"
      disableElevation
      href={adjustedLink}
      style={{
        height: '50px',
        width: '50px',
        minWidth: '50px',
        borderRadius: '50px',
        padding: '0px',
      }}
    >
      <FontAwesomeIcon icon={type.fontAwesome} style={{ fontSize: '20px' }} />
    </Button>
  )
}

export default ButtonIconLink
