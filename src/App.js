import Header from 'layouts/Header'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import firebase from 'config/firebase'
import ViewProfile from 'pages/ViewProfile/ViewProfile'
import ViewBand from 'pages/ViewBand/ViewBand'
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage'
import UsernameRedirect from 'pages/UsernameRedirect/UsernameRedirect'
import ProfileLayout from 'layouts/ProfileLayout'
import Home from 'pages/Home/Home'

const App = () => {
  firebase.analytics()

  return (
    <Router>
      {/* <AlertBar /> */}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/profile/:id" element={<ProfileLayout />}>
            <Route path="/profile/:id" element={<ViewProfile />} />
          </Route>
          <Route path="/band/:id" element={<ProfileLayout />}>
            <Route path="/band/:id" element={<ViewBand />} />
          </Route>
          <Route path="/:username" element={<UsernameRedirect />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
