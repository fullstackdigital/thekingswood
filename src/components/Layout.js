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
                'natural, biodynamic & organic wine, mediterranean kitchen, craft beer, picnic boxes, caffeine, the river & you',
            },
            {
              name: 'keywords',
              content:
                'wine, natural wine, brunswick, brunswick heads, restaurant, mediterranean, tapas, food, lunch, dinner, beer, craft beer',
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
              content: 'The Kingswood',
            },
            {
              property: 'og:description',
              content:
                'natural, biodynamic & organic wine, mediterranean kitchen, craft beer, picnic boxes, caffeine, the river & you',
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
                'natural, biodynamic & organic wine, mediterranean kitchen, craft beer, picnic boxes, caffeine, the river & you',
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
