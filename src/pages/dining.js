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
            We are open six (6) days a week (closed Tuesdays). Our menus are
            different for Lunch (12PM - 4PM) &amp; Dinner (4PM - close).
            Reservations are allocated 2 hours to dine but we will endeavour to
            accommodate longer bookings. For larger groups we set aside 3 hours.
            Later dinner reservations have no time constraints.
            <div
              style={{
                marginTop: '3rem',
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
          </div>
        </div>
        <div className="section">
          <h2>Seating Areas</h2>
          <div className="text">
            When booking you will be prompted to choose where you wish to sit.<br />
            <br />
            <ul>
              <li>
                Dining Room: In the dining room guests are seated at standard
                height dining tables.
              </li>
              <li>
                Bar Seating: We have eight (8) bar stools at the kitchen/bar
                counter where guests will be side by side facing the bar and
                kitchen. Bar stools are cushioned with back support and
                footrests.{' '}
              </li>
              <li>
                Front Section: Up the front we have 4 tables at kitchen counter
                height including one outside table in our entrance way that is
                covered. In this area guests will be seated on kitchen counter
                height stools.
              </li>
              <li>
                Footpath Dining: The footpath dining area is exposed to the
                weather and for this reason we do not take reservations. We have
                one (1) large communal table and five (5) round tables that seat
                1 3 people. These tables are on a first come first serve.
              </li>
            </ul>
          </div>
        </div>
        <div className="section">
          <h2>Dietary Requirements</h2>
          <div className="text">
            The Kingswood caters for vegetarian, vegan, gluten free, dairy free
            and other diets. You may ring ahead{' '}
            <a href="tel:+61-2-6685-1111">02 6685 1111</a> or email{' '}
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
            Little people are most welcome at The Kingswood.
          </div>
        </div>
      </div>
    </div>
  </HomeLayout>
)

export default DiningPage
