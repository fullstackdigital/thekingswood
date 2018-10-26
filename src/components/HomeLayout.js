import React from 'react'
import Layout from './Layout'
import kingswoodBackground from '../images/shop.jpg'
import PropTypes from 'prop-types'

const HomeLayout = props => (
  <Layout>
    <div className="bg-blue">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100%',
        }}
      >
        {props.children}
      </div>
    </div>
    <img
      src={kingswoodBackground}
      style={{
        height: '100vh',
        width: '100%',
        objectFit: 'cover',
      }}
      alt="The Kingswood - Coming Nov 2018"
    />
  </Layout>
)
HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
