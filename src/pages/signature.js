import React from 'react'
import Layout from '../components/layout'
import logo from '../images/kingswood-logo-180.png'
import instaIcon from '../images/instagram-icon.png'
import fbIcon from '../images/fb-icon.png'

const linkColor = '#404040'

const SignaturePage = () => (
  <Layout displayBlock={true}>
    <div
      style={{
        fontFamily: 'Verdana, Sans-Serif',
        fontSize: '10px',
        lineHeight: '14px',
        fontWeight: 'normal',
        marginLeft: '1em',
      }}
    >
      <br />
      <div style={{ fontWeight: 'bold' }}>
        <span>Donna Hingston</span>

        <span
          style={{
            width: 1,
            height: '1rem',
            borderLeft: '1px solid gray',
            marginLeft: '1em',
            marginRight: '1em',
          }}
        />
        <span>Owner / Director</span>
      </div>
      <div>
        <a
          style={{ textDecoration: 'none', color: 'inherit' }}
          href="tel:+61-400-781-310"
        >
          m: 0400 781 310
        </a>
      </div>
      <div>
        <a href="mailto:donna@thekingswood.com.au" style={{ color: linkColor }}>
          donna@thekingswood.com.au
        </a>
      </div>

      <div
        style={{
          display: 'inline-block',
          borderBottom: '1px solid gray',
          margin: '0.75rem 0',
          padding: '0.75rem 0',
        }}
      >
        <div style={{ display: 'inline-block', marginRight: '1em' }}>
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
                color: linkColor,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginBottom: '0.5rem',
              }}
            >
              <img
                src={instaIcon}
                style={{ width: '24px', marginRight: '0.5em' }}
                alt="Instagram (logo)"
              />
              <span>the.kingswood</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/thekingswoodbrunswickheads/"
              style={{
                color: linkColor,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <img
                src={fbIcon}
                style={{
                  width: '24px',
                  marginRight: '0.5em',
                }}
                alt="Facebook (logo)"
              />
              <span>thekingswoodbrunswickheads</span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <a
          style={{ textDecoration: 'none', color: 'inherit' }}
          href="https://www.google.com.au/maps/place/The+Kingswood/@-28.5395242,153.5489723,17z/data=!3m1!4b1!4m5!3m4!1s0x6b908bb174a108dd:0xa7a92541badfbf78!8m2!3d-28.5395289!4d153.551161"
        >
          2/26 Mullumbimbi Street
          <span style={{ marginLeft: '1em' }}>Brunswick Heads NSW 2483</span>
        </a>
      </div>
      <div>
        <a href="https://www.thekingswood.com.au" style={{ color: linkColor }}>
          www.thekingswood.com.au
        </a>
        <a
          style={{
            textDecoration: 'none',
            color: 'inherit',
            marginLeft: '1em',
          }}
          href="tel:+61-2-6685-1111"
        >
          +61 2 6685 1111
        </a>
      </div>
    </div>
  </Layout>
)

export default SignaturePage
