import React from 'react'
import Layout from '../components/layout'
import logo from '../images/kingswood-logo-180.png'
import instaIcon from '../images/instagram-icon.png'
import fbIcon from '../images/fb-icon.png'

const linkColor = '#404040'
const linkStyle = { textDecoration: 'none', color: linkColor }

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
        <a style={linkStyle} href="tel:+61-400-781-310">
          m: 0400 781 310
        </a>
      </div>
      <div>
        <a style={linkStyle} href="mailto:donna@thekingswood.com.au">
          donna@thekingswood.com.au
        </a>
      </div>

      <table
        style={{
          marginTop: '1.5em',
        }}
      >
        <tbody>
          <tr>
            <td rowSpan={2} style={{ paddingRight: '1em' }}>
              <img
                src={logo}
                style={{ width: 180, objectFit: 'contain' }}
                alt="The Kingswood (logo)"
              />
            </td>
            <td>
              <div>
                <a
                  href="https://www.instagram.com/the.kingswood/"
                  style={{
                    ...linkStyle,
                  }}
                >
                  <img
                    src={instaIcon}
                    style={{
                      width: '24px',
                      marginRight: '0.5em',
                      verticalAlign: 'middle',
                    }}
                    alt="Instagram (logo)"
                  />
                  <span style={{ lineHeight: '24px', verticalAlign: 'middle' }}>
                    the.kingswood
                  </span>
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <a
                  href="https://www.facebook.com/thekingswoodbrunswickheads/"
                  style={{
                    ...linkStyle,
                  }}
                >
                  <img
                    src={fbIcon}
                    style={{
                      width: '24px',
                      marginRight: '0.5em',
                      verticalAlign: 'middle',
                    }}
                    alt="Facebook (logo)"
                  />
                  <span style={{ lineHeight: '24px', verticalAlign: 'middle' }}>
                    thekingswoodbrunswickheads
                  </span>
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              style={{
                paddingTop: '0.5em',
                borderBottom: '1px solid gray',
              }}
            />
          </tr>
        </tbody>
      </table>
      <div
        style={{
          display: 'inline-block',
          marginTop: '1em',
        }}
      >
        <a
          style={linkStyle}
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
            ...linkStyle,
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
