import React from 'react'

const linkColor = '#404040'
const linkStyle = { textDecoration: 'none', color: linkColor }

const SignaturePage = ({ pageContext, location }) => {
  const absPrefix = location.origin || 'https://www.thekingswood.com.au'
  return (
    <div>
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
        <div>m: {pageContext.user.mobileDisplay}</div>
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
          }}
        >
          <tbody>
            <tr>
              <td rowSpan={2} style={{ paddingRight: '1em' }}>
                <img
                  src={`${absPrefix}/img/kingswood-logo-360.png`}
                  style={{ width: 180, height: 58 }}
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
                      src={`${absPrefix}/img/instagram-icon.png`}
                      style={{
                        width: 24,
                        height: 24,
                        marginRight: '0.5em',
                        verticalAlign: 'middle',
                      }}
                      alt="Instagram (logo)"
                    />
                    <span
                      style={{ lineHeight: '24px', verticalAlign: 'middle' }}
                    >
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
                      src={`${absPrefix}/img/fb-icon.png`}
                      style={{
                        width: 24,
                        height: 24,
                        marginRight: '0.5em',
                        verticalAlign: 'middle',
                      }}
                      alt="Facebook (logo)"
                    />
                    <span
                      style={{ lineHeight: '24px', verticalAlign: 'middle' }}
                    >
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
          <span
            style={{
              marginLeft: '1em',
            }}
          >
            +61 2 6685 1111
          </span>
        </div>
      </div>
    </div>
  )
}

export default SignaturePage
