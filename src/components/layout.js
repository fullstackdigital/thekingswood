import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'natural, biodynamic & organic wine, craft beer, caffeine, kitchen, the river & you',
            },
            {
              name: 'keywords',
              content:
                'wine, natural wine, brunswick, brunswick heads, restaurant, food, lunch, dinner, beer, craft beer',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
