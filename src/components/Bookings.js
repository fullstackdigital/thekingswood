import React from 'react'

const Bookings = () => (
  <div id="bookings" className="section">
    <h2>Bookings</h2>
    <div className="text">
      Walk-ins welcome. Reservations highly suggested. Reserve your spot inside
      our cozy dining room, at the kitchen bar, or outside across from the park.
      The Kingswood accepts online bookings for groups of up to seven (7). For
      larger groups and private events,{' '}
      <a href="#groups" style={{ fontWeight: 400 }}>
        click here.
      </a>
    </div>
    <div className="text" style={{ display: 'flex' }}>
      <div className="callout">
        <a href="https://www.obee.com.au/thekingswoodbrunswickheads/">
          Book now >
        </a>
      </div>
    </div>
  </div>
)

export default Bookings
