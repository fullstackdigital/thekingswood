import React from 'react'
import instaIcon from '../images/instagram-icon-white.png'
import fbIcon from '../images/fb-icon-white.png'

const Main = () => (
  <div id="main">
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          left: '-20px',
          borderTop: '1px solid white',
          borderLeft: '1px solid white',
          borderBottom: '1px solid white',
          width: '20px',
          height: '100%',
        }}
      />
      <div
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <p className="text text--wide">
          <span className="nowrap">
            natural, biodynamic &amp; organic wines
          </span>
          <br />
          <span className="nowrap">
            coastal kitchen • craft beer • caffeine
          </span>
          <br />
          <span className="nowrap">picnic boxes • the river &amp; you</span>
        </p>
        <p className="text text--wide">
          open from midday till late • lunch thru dinner
          <br />6 days a week (closed tues)
        </p>
        <p className="text text--wide">
          <a href="https://www.google.com.au/maps/place/The+Kingswood/@-28.5395242,153.5489723,17z/data=!3m1!4b1!4m5!3m4!1s0x6b908bb174a108dd:0xa7a92541badfbf78!8m2!3d-28.5395289!4d153.551161">
            2/26 mullumbimbi street&nbsp;
            <br />
            brunswick heads nsw 2483
          </a>
          <br />
          <a href="tel:+61-2-6685-1111">ph +61 2 6685 1111</a>
        </p>
        <p>
          <a
            href="https://www.instagram.com/the.kingswood/"
            className="text text--wide"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginBottom: '0.5rem',
            }}
          >
            <img
              src={instaIcon}
              style={{ width: '24px', marginRight: '0.5rem' }}
              alt="Instagram (logo)"
            />
            <span>the.kingswood</span>
          </a>
          <a
            href="https://www.facebook.com/thekingswoodbrunswickheads/"
            className="text text--wide"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <img
              src={fbIcon}
              style={{
                width: '28px',
                marginLeft: '-2px',
                marginRight: '4px',
              }}
              alt="Facebook (logo)"
            />
            <span>thekingswoodbrunswickheads</span>
          </a>
        </p>
      </div>
    </div>
  </div>
)

export default Main
