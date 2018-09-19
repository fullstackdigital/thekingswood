import React from 'react'

const linkColor = '#404040'
const linkStyle = { textDecoration: 'none', color: linkColor }

const SignaturePage = ({ pageContext, location }) => {
  const absPrefix = 'https://www.thekingswood.com.au'
  return (
    <div>
      <div
        style={{
          fontFamily: 'Verdana, Sans-Serif',
          fontSize: '10px',
          lineHeight: '14px',
          fontWeight: 'normal',
        }}
      >
        <br />
        <div style={{ fontWeight: 'bold' }}>
          <span>{pageContext.user.name}</span>

          <span
            style={{
              width: 1,
              height: '1rem',
              borderLeft: '1px solid gray',
              marginLeft: '1em',
              marginRight: '1em',
            }}
          />
          <span>{pageContext.user.title}</span>
        </div>
        <div>
          m:{' '}
          <a
            href={`tel:${pageContext.user.mobileLink}`}
            style={{
              ...linkStyle,
            }}
          >
            {pageContext.user.mobileDisplay}
          </a>
        </div>
        <div>
          <a
            href={`mailto:${pageContext.user.email}`}
            style={{
              ...linkStyle,
            }}
          >
            {pageContext.user.email}
          </a>
        </div>

        <table
          style={{
            marginTop: '1.5em',
            borderSpacing: 0,
          }}
        >
          <tbody>
            <tr>
              <td rowSpan={2} style={{ paddingRight: '1em' }}>
                <img
                  src={`${absPrefix}/img/kingswood-logo-340.png`}
                  style={{ width: 170, height: 48, objectFit: 'contain' }}
                  alt="The Kingswood (logo)"
                />
              </td>
              <td style={{ minWidth: 180, paddingTop: '0.75em' }}>
                <a
                  href="https://www.instagram.com/the.kingswood/"
                  style={{
                    ...linkStyle,
                  }}
                >
                  <img
                    src={`${absPrefix}/img/instagram-icon.png`}
                    style={{
                      width: 18,
                      height: 18,
                      marginRight: '0.5em',
                      verticalAlign: 'middle',
                    }}
                    alt="Instagram (logo)"
                  />
                  <span
                    style={{
                      fontSize: '10px',
                      lineHeight: '10px',
                      verticalAlign: 'middle',
                    }}
                  >
                    the.kingswood
                  </span>
                </a>
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: 180, paddingBottom: '0.25em' }}>
                <a
                  href="https://www.facebook.com/thekingswoodbrunswickheads/"
                  style={{
                    ...linkStyle,
                  }}
                >
                  <img
                    src={`${absPrefix}/img/fb-icon.png`}
                    style={{
                      width: 18,
                      height: 18,
                      marginRight: '0.5em',
                      verticalAlign: 'middle',
                    }}
                    alt="Facebook (logo)"
                  />
                  <span
                    style={{
                      fontSize: '10px',
                      lineHeight: '10px',
                      verticalAlign: 'middle',
                    }}
                  >
                    thekingswoodbrunswickheads
                  </span>
                </a>
              </td>
            </tr>
            <tr>
              <td
                colSpan={2}
                style={{
                  paddingTop: '0.5em',
                }}
              >
                <hr style={{ margin: 0, padding: 0, background: '#808080' }} />
              </td>
            </tr>
          </tbody>
        </table>
        <div
          style={{
            display: 'inline-block',
            marginTop: '1em',
          }}
        >
          2/26 Mullumbimbi Street
          <span style={{ marginLeft: '1em' }}>Brunswick Heads NSW 2483</span>
        </div>
        <div>
          <a
            href="https://www.thekingswood.com.au"
            style={{ color: linkColor }}
          >
            www.thekingswood.com.au
          </a>
          <a
            href="tel:+61266851111"
            style={{
              ...linkStyle,
              marginLeft: '1em',
            }}
          >
            +61 2 6685 1111
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignaturePage
