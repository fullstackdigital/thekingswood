import React from 'react'

const Bookings = () => (
  <div id="bookings" className="section">
    <h2>Bookings</h2>
    <div className="text">
      Walk-ins welcome. Reservations recommended. Reserve your spot inside our
      cozy dining room or watch the chefs at work from the kitchen bar. Our
      outdoor dining area is just across from the park in beautiful Brunswick
      Heads. These seats are weather-permitting and are not available for
      bookings. The Kingswood accepts online bookings for groups of up to seven
      (7). For larger groups and private events{' '}
      <a
        href="#groups"
        style={{ fontWeight: 400, textDecoration: 'underline' }}
      >
        click here.
      </a>
    </div>
    <div className="text">
      <div style={{ marginTop: '3rem' }}>
        <a className="button button--inverse" href="/dining">
          Make a booking
        </a>
      </div>
    </div>
  </div>
)

export default Bookings
