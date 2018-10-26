import React from 'react'
import kingswoodLogo from '../images/kingswood-logo-inverted.png'
import HomeLayout from '../components/HomeLayout'
import Menu from '../components/Menu'
import Main from '../components/Main'
import Bookings from '../components/Bookings'
import './index.css'

const IndexPage = () => (
  <HomeLayout>
    <div style={{ maxWidth: '75%', paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Menu />
        <img
          src={kingswoodLogo}
          className="logo wfull-when-small"
          alt="The Kingswood (logo)"
        />
        <Main />
      </div>
      <Bookings />
    </div>
  </HomeLayout>
)

export default IndexPage
