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
    <div style={{ position: 'relative', width: '100%', minHeight: '460px' }}>
      <div
        className="obee-widget"
        data-obee-url="thekingswoodbrunswickheads"
        data-obee-widget-type="booking"
        data-obee-min-height="450"
        data-obee-add-height="50"
        data-obee-scrolltop="true"
      />
      <script src="https://obee.com.au/common/js/dynamic/iframe.js" />
    </div>
  </HomeLayout>
)

export default BookingPage
