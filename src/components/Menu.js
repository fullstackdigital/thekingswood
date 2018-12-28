import React from 'react'
import { Link } from 'gatsby'
import './Menu.css'

const Menu = () => (
  <div className="menu">
    <Link to="/#bookings" className="button">
      BOOKINGS
    </Link>
    <Link to="/#gifts" className="button">
      GIFT VOUCHERS
    </Link>
    <Link to="/#food" className="button">
      FOOD
    </Link>
    <Link to="/#drinks" className="button">
      DRINKS
    </Link>
  </div>
)

export default Menu
