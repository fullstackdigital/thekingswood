import React from 'react'
import HomeLayout from '../components/HomeLayout'
import kingswoodLogo from '../images/kingswood-logo-inverted.png'

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
        position: 'relative',
        display: 'flex',
        minWidth: '520px',
        minHeight: '460px',
      }}
    >
      <iframe
        frameBorder="0"
        src="https://www.obee.com.au/thekingswoodbrunswickheads/"
        width="100%"
        style={{ minHeight: 450, backgroundColor: 'white' }}
      />
    </div>
  </HomeLayout>
)

export default BookingPage
