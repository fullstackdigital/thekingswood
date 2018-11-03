import React from 'react'
import Layout from './Layout'
import kingswoodDoor from '../images/shop-door.jpg'
import kingswoodWindows from '../images/shop-windows.jpg'
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
    <div style={{ width: '100%', position: 'relative' }}>
      <img
        src={kingswoodWindows}
        className="bg-img bg-img--left"
        alt="The Kingswood - Coming Nov 2018"
      />
      <img
        src={kingswoodDoor}
        className="bg-img bg-img--right"
        alt="The Kingswood - Coming Nov 2018"
      />
    </div>
  </Layout>
)
HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
