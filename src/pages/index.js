import React from 'react'
import { Link } from 'gatsby'
import kingswoodPoster from '../images/kingswood-poster-square.jpg'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <img
      style={{ maxHeight: '100vh', objectFit: 'contain' }}
      src={kingswoodPoster}
      alt="The Kingswood - Coming Soon"
    />
  </Layout>
)

export default IndexPage
