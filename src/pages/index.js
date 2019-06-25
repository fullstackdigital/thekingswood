import React from 'react'
import kingswoodLogo from '../images/kingswood-logo-inverted.png'
import HomeLayout from '../components/HomeLayout'
import Menu from '../components/Menu'
import Main from '../components/Main'
import Bookings from '../components/Bookings'
import Groups from '../components/Groups'
import Food from '../components/Food'
import Drinks from '../components/Drinks'
import Gifts from '../components/Gifts'

const IndexPage = () => (
  <HomeLayout>
    <div style={{ maxWidth: '70%', paddingBottom: '2rem' }}>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
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
      <Gifts />
      <Food />
      <Drinks />
      <Groups />
    </div>
  </HomeLayout>
)

export default IndexPage
