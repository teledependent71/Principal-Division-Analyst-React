import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Principal Division Analyst</title>
        <meta property="og:title" content="Principal Division Analyst" />
      </Helmet>
    </div>
  )
}

export default Home
