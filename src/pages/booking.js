import React from 'react'
import HomeLayout from '../components/HomeLayout'
import kingswoodLogo from '../images/kingswood-logo-inverted.png'
import './index.css'

const BookingPage = () => (
  <HomeLayout>
    <img
      src={kingswoodLogo}
      className="logo wfull-when-small"
      alt="The Kingswood (logo)"
    />
    <div style={{ paddingTop: '2rem' }}>
      <h2>Make a Booking</h2>
    </div>
    <div
      style={{
        overflowX: 'scroll',
      }}
    >
      <div
        style={{
          display: 'flex',
          minWidth: '520px',
          minHeight: '460px',
        }}
      >
        <iframe
          title="Book Online"
          frameBorder="0"
          src="https://www.obee.com.au/thekingswoodbrunswickheads/"
          width="100%"
          style={{
            minHeight: 450,
            backgroundColor: 'white',
          }}
        />
      </div>
    </div>
  </HomeLayout>
)

export default BookingPage
