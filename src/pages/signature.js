import React from 'react'
import Layout from '../components/layout'
import logo from '../images/kingswood-logo-180.png'
import instaIcon from '../images/instagram-icon.png'
import fbIcon from '../images/fb-icon.png'

const SignaturePage = () => (
  <Layout displayBlock={true}>
    <div
      style={{
        fontFamily: 'Verdana, Sans-Serif',
        fontSize: '80%',
        fontWeight: 'normal',
      }}
    >
      <div style={{ fontWeight: 'bold' }}>
        <span>Donna Hingston</span>
        <span
          style={{
            width: 1,
            height: '1rem',
            borderLeft: '1px solid gray',
            marginLeft: '1rem',
            marginRight: '1rem',
          }}
        />
        <span>Owner / Director</span>
      </div>
      <div>m: 0400 781 310</div>
      <div>
        <a href="mailto:donna@thekingswood.com.au" style={{ color: 'inherit' }}>
          donna@thekingswood.com.au
        </a>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <div>2/26 Mullumbimbi Street</div>
        <div>Brunswick Heads NSW 2483</div>
      </div>
      <div>
        <a href="https://www.thekingswood.com.au" style={{ color: 'inherit' }}>
          www.thekingswood.com.au
        </a>
      </div>
      <div
        style={{
          display: 'inline-block',
          borderTop: '1px solid gray',
          margin: '0.75rem 0',
          padding: '0.75rem 0',
        }}
      >
        <div style={{ display: 'inline-block', marginRight: '1rem' }}>
          <img
            src={logo}
            style={{ width: 180, objectFit: 'contain' }}
            alt="The Kingswood (logo)"
          />
        </div>
        <div style={{ display: 'inline-block' }}>
          <div>
            <a
              href="https://www.instagram.com/the.kingswood/"
              style={{
                color: 'inherit',
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
          </div>
          <div>
            <a
              href="https://www.facebook.com/thekingswoodbrunswickheads/"
              style={{
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <img
                src={fbIcon}
                style={{
                  width: '24px',
                  marginRight: '0.5rem',
                }}
                alt="Facebook (logo)"
              />
              <span>thekingswoodbrunswickheads</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default SignaturePage
