import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getDatabase, ref, onValue } from 'firebase/database'

const BandCard = ({ id }) => {
  const [band, setBand] = useState(null)
  const db = getDatabase()

  useEffect(() => {
    const bandRef = ref(db, 'bands/' + id)

    onValue(bandRef, snapshot => {
      if (snapshot.val()) {
        setBand(snapshot.val())
      }
    })
  }, [db, id])

  return (
    <>
      {!!band && (
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
          <CardActionArea component={Link} to={'/band/' + id}>
            <CardMedia
              component="img"
              alt={band.name}
              height="250"
              image={band.profileImageUrl}
            />
            <CardContent>
              <Typography>
                <b>{band.name}</b>
              </Typography>
              <Typography>{band.genre}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  )
}

export default BandCard
