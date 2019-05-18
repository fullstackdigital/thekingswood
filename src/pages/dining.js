import React from 'react'
import HomeLayout from '../components/HomeLayout'
import Menu from '../components/Menu'
import kingswoodLogo from '../images/kingswood-logo-inverted.png'

const DiningPage = () => (
  <HomeLayout>
    <div style={{ maxWidth: '75%', paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div
        style={{
          minHeight: '100vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Menu />
          <a href="/">
            <img
              src={kingswoodLogo}
              className="logo wfull-when-small"
              alt="The Kingswood (logo)"
            />
          </a>
        </div>
        <div className="section">
          <h2>Dining at The Kingswood</h2>
          <div className="text">
            Booking for a special occasion or want to reserve a Lazy Sundaze
            Roast? (we have been known to sell out!) Please indicate in comments
            so we can make sure to accommodate you.
            <div
              style={{
                marginTop: '3rem',
                marginBottom: '3rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <a
                className="button button--inverse"
                href="https://www.obee.com.au/thekingswoodbrunswickheads/"
              >
                Make a booking
              </a>
            </div>
            Reservations are allocated 2 hours to dine but we will endeavour to
            accommodate longer bookings. For larger groups we set aside 3 hours.
            Later dinner reservations have no time constraints. <br />
            <br />
            * online bookings must be made at least 2 hours ahead - apologies if
            we can't get to the phone during a busy service, but please feel
            encouraged to walk-in.
          </div>
        </div>
        <div className="section">
          <h2>Seating Areas</h2>
          <div className="text">
            When booking you will be prompted to choose where you wish to sit.<br />
            <br />
            <ul>
              <li>
                Inside / Dining Room: In the dining room guests are seated at
                standard height dining tables or counter-height stools. If you
                have a preference for seating, please leave a note in your
                comments and we will try to accommodate where possible.
              </li>
              <li>
                Inside / Bar Seating: We have eight bar stools at the
                kitchen/bar counter where guests will be side by side facing the
                bar and kitchen. Bar stools are cushioned with back support and
                footrests.{' '}
              </li>
              <li>
                Outside / Footpath Dining: We have one large communal table with
                room for 12, and five round tables which can suit groups of 2 -
                4. These seats are weather-permitting - in case of rain, we'll
                do our best to re-seat you inside, however when booking the
                outside section, please note that an inside seat cannot be
                guaranteed.
              </li>
            </ul>
          </div>
        </div>
        <div className="section">
          <h2>Dietary Requirements</h2>
          <div className="text">
            The Kingswood menu caters for vegetarian, vegan, gluten-free,
            dairy-free and other diets. If you have specific concerns, feel free
            to ring ahead <a href="tel:+61-2-6685-1111">02 6685 1111</a> or
            email{' '}
            <a
              href="mailto:reservations@thekingswood.com.au"
              style={{ fontWeight: '400' }}
            >
              reservations@thekingswood.com.au
            </a>{' '}
            to discuss menu options.
          </div>
        </div>
        <div className="section">
          <h2>Babies &amp; Little People</h2>
          <div className="text">
            Little people are most welcome at The Kingswood, and there are
            several kid-friendly options on the menu ☺☺☺
          </div>
        </div>
      </div>
    </div>
  </HomeLayout>
)

export default DiningPage
