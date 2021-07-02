import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="logo-container">
      <img
        alt="wave"
        className="wave-logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <p className="tab-text">Wave</p>
    </div>
    <ul className="tabs-container">
      <li className="tab-text">
        <Link to="/">Home</Link>
      </li>
      <li className="tab-text">
        <Link to="/about">About</Link>
      </li>
      <li className="tab-text">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
