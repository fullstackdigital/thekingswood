import React from 'react'
import HomeLayout from '../components/HomeLayout'

const BookingPage = () => (
  <HomeLayout>
    <div style={{ position: 'relative', width: '100vw', minHeight: '460px' }}>
      <iframe
        title="Book Now"
        src="https://www.obee.com.au/thekingswoodbrunswickheads/"
        frameBorder="0"
        width="80%"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255)',
        }}
      />
    </div>
  </HomeLayout>
)

export default BookingPage
