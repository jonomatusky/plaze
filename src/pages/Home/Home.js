import React, { useEffect } from 'react'

import LoadingPage from 'pages/LoadingPage/LoadingPage'

const Home = () => {
  useEffect(() => {
    window.location.href = 'https://plazeapp.co'
  })

  return <LoadingPage />
}

export default Home
