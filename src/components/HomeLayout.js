import React from 'react'
import Layout from './Layout'
import kingswoodBackground from '../images/kingswood-ladies.svg'
import PropTypes from 'prop-types'
import './HomeLayout.css'

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
    <div style={{ display: 'flex' }}>
      <img
        src={kingswoodBackground}
        style={{
          height: '100vh',
          objectFit: 'cover',
          opacity: 0.8,
        }}
        alt="The Kingswood - Coming Nov 2018"
      />
      <img
        className="hidden-when-small"
        src={kingswoodBackground}
        style={{
          height: '100vh',
          objectFit: 'cover',
        }}
        alt="The Kingswood - Coming Nov 2018"
      />
    </div>
  </Layout>
)
HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
