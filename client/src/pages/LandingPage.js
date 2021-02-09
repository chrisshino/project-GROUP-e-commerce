import React from 'react'

import Hero from '../components/Hero';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <div style={{height: '100vh'}}></div> {/* To be removed once we have more contents */}
    </div>
  )
}

export default LandingPage
