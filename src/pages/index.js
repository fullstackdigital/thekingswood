import React from 'react'
import kingswoodBackground from '../images/shop.jpg'
import kingswoodLogo from '../images/kingswood-logo-inverted.png'
import instaIcon from '../images/instagram-icon-white.png'
import fbIcon from '../images/fb-icon-white.png'
import Layout from '../components/layout'
import './index.css'

const IndexPage = () => (
  <Layout>
    <div className="bg-blue">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100%',
        }}
      >
        <div style={{ maxWidth: '75%', margin: '2rem' }}>
          <img
            src={kingswoodLogo}
            style={{
              marginLeft: '-12px',
              marginBottom: '1.5rem',
              width: '100%',
              maxWidth: 420,
            }}
            alt="The Kingswood (logo)"
          />
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
              <p className="text">
                natural, biodynamic & organic wines
                <br />
                mediterranean kitchen • craft beer • caffeine
                <br />
                picnic boxes • the river & you
              </p>
              <p className="text">
                open from midday till late • lunch thru dinner
                <br />6 days a week (closed tues)
              </p>
              <p className="text text--small">
                <a href="https://www.google.com.au/maps/place/The+Kingswood/@-28.5395242,153.5489723,17z/data=!3m1!4b1!4m5!3m4!1s0x6b908bb174a108dd:0xa7a92541badfbf78!8m2!3d-28.5395289!4d153.551161">
                  <span className="block-when-small">
                    2/26 Mullumbimbi Street&nbsp;
                  </span>
                  <span className="block-when-small">
                    Brunswick Heads NSW 2483
                  </span>
                </a>
                <br />
                <a href="tel:+61-2-6685-1111">ph +61 2 6685 1111</a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/the.kingswood/"
                  className="text"
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
                  className="text"
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
      </div>
    </div>
    <img
      src={kingswoodBackground}
      style={{
        height: '100vh',
        width: '100%',
        objectFit: 'cover',
      }}
      alt="The Kingswood - Coming Soon"
    />
  </Layout>
)

export default IndexPage
