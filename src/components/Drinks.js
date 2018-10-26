import React from 'react'

const Drinks = () => (
  <div
    id="drinks"
    style={{
      paddingTop: '20px',
      paddingBottom: '20px',
    }}
  >
    <h2>Drinks</h2>
    <p className="text">
      Walk-ins welcome. Reservations can be made up to three (3) months in
      advance and up to one (1) hour prior to your desired dining time. The
      Kingswood accepts <em>online bookings</em> for groups of up to seven (7).
      For larger group bookings (eight (8) or more) or to enquire about a
      private event{' '}
      <a href="#groups" style={{ fontWeight: '400' }}>
        click here.
      </a>
    </p>
    <p className="text">
      We are open seven (7) days (closed Tuesdays). Our menus are different for
      Lunch (12PM - 4PM) &nbsp;&amp; Dinner (4PM - close).
    </p>
    <p className="text">
      Reservations are allocated 2 hours to dine but we will endeavour to
      accommodate longer bookings. For larger groups we set aside 3 hours. Later
      dinner reservations have no time constraints.
    </p>
  </div>
)

export default Drinks
