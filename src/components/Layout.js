import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import kingswoodPoster from '../images/kingswood-poster.jpg'
import './Layout.css'

const Layout = ({ displayBlock, children, data }) => (
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
                'located in downtown brunswick heads, the kingswood is a wine bar / restaurant serving up natural, biodynamic & organic wine, coastal seafood, craft beer, and plenty of good vibes.',
            },
            {
              name: 'keywords',
              content:
                'restaurant, cafe, brunswick heads, mediterranean, italian, pasta, tapas, food, lunch, dinner, wine, natural wine, brunswick, beer, craft beer, coffee',
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              property: 'og:url',
              content: 'https://www.thekingswood.com.au',
            },
            {
              property: 'og:title',
              content: 'The Kingswood Restaurant Brunswick Heads',
            },
            {
              property: 'og:description',
              content:
                'located in downtown brunswick heads, the kingswood is a wine bar / restaurant serving up natural, biodynamic & organic wine, coastal seafood, craft beer, and plenty of good vibes.',
            },
            {
              property: 'og:image',
              content: kingswoodPoster,
            },
            {
              property: 'og:image:width',
              content: '512',
            },
            {
              property: 'og:image:height',
              content: '512',
            },
            {
              name: 'twitter:card',
              content: 'summary_large_image',
            },
            {
              name: 'twitter:domain',
              value: 'thekingswood.com.au',
            },
            {
              name: 'twitter:creator',
              value: '@thekingswood',
            },
            {
              name: 'twitter:title',
              value: 'The Kingswood',
            },
            {
              name: 'twitter:description',
              value:
                'located in downtown brunswick heads, the kingswood is a wine bar / restaurant serving up natural, biodynamic & organic wine, coastal seafood, craft beer, and plenty of good vibes.',
            },
            {
              name: 'twitter:image',
              value: kingswoodPoster,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div
          style={{
            display: displayBlock ? 'block' : 'flex',
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
  displayBlock: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Layout
