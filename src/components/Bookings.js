import React from 'react'
import { Link } from 'gatsby'

const Bookings = () => (
  <div id="bookings" className="section">
    <h2>Bookings</h2>
    <div className="text">
      Walk-ins welcome. Reservations recommended. Reserve your spot inside our
      cozy dining room or watch the chefs at work from the kitchen bar. Our
      outdoor dining area is just across from the park in beautiful Brunswick
      Heads, however our outside seats are weather-permitting - in case of rain,
      we'll do our best to re-seat you inside. The Kingswood accepts online
      bookings for groups of up to seven (7). For larger groups and private
      events{' '}
      <a
        href="#groups"
        style={{ fontWeight: 400, textDecoration: 'underline' }}
      >
        click here.
      </a>
    </div>
    <div className="text">
      <div style={{ marginTop: '3rem' }}>
        <Link className="button button--inverse" to="/dining/">
          Make a booking
        </Link>
      </div>
    </div>
  </div>
)

export default Bookings
