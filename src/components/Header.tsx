import 'styles/header.scss'
import { Link } from 'react-router-dom'
import logo from 'files/Hamburger walk.jpg'
import menuIcon from 'files/🦆 icon _menu_.svg'
import cartIcon from 'files/cart.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-container container'>
        <div className='header_menu'>
          <img src={menuIcon} alt={menuIcon} />
        </div>
        <div className='header_logo'>
          <Link to='/'>
            <img src={logo} alt={logo} />
          </Link>
        </div>
        <div className='header_cart'>
          <img src={cartIcon} alt={cartIcon} />
        </div>
      </div>
    </div>
  )
}
export default Header