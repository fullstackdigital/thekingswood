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
          height: '100vh',
        }}
      >
        <div style={{ width: '70%' }}>
          <img
            src={kingswoodLogo}
            style={{
              marginLeft: '-12px',
              marginBottom: '1.5rem',
              width: '100%',
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
                tapas • craft beer • picnic boxes • caffeine
                <br />
                the river & you
              </p>
              <p className="text text--small">
                open from midday • tapas, lunch, dinner
                <br />6 days a week (closed tues)
              </p>
              <p className="text text--small">
                2/26 Mullumbimi Street • Brunswick Heads, NSW
                <br />
                ph 02 6685 1111
              </p>
              <p>
                <a
                  href="https://www.instagram.com/the.kingswood/"
                  className="text text--small"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}
                >
                  <img
                    src={instaIcon}
                    style={{ width: '24px', marginRight: '0.5rem' }}
                    alt="Instagram (logo)"
                  />
                  <span>instagram.com/the.kingswood</span>
                </a>
                <a
                  href="https://www.facebook.com/thekingswoodbrunswickheads/"
                  className="text text--small"
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
                  <span>facebook.com/thekingswoodbrunswickheads</span>
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
