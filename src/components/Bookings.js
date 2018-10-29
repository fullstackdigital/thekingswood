import React from 'react'

const Bookings = () => (
  <div id="bookings" className="section">
    <h2>Bookings</h2>
    <div className="text">
      Reservations are recommended, but walk-ins are also welcome. Reserve your
      spot inside our cozy dining room or watch the chefs at work from the
      kitchen bar. The Kingswood accepts online bookings for groups of up to
      seven (7). For larger groups and private events,{' '}
      <a href="#groups" style={{ fontWeight: 400 }}>
        click here.
      </a>
    </div>
    <div className="text">
      Our outdoor dining area is right across from the park in beautiful
      Brunswick Heads - come grab a seat, we don't take bookings outside.
    </div>
    <div className="text">
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <a className="button button--inverse" href="/booking">
          Make a booking >
        </a>
      </div>
    </div>
  </div>
)

export default Bookings
