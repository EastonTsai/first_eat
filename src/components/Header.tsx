import 'styles/header.scss'
import { Link } from 'react-router-dom'
import { UserData } from 'context/UserContext'
import logo from 'files/Hamburger_walk.jpg'
const Header = (props: {
  shoppingCartNum: string | number,
}) => {
  const { shoppingCartNum } = props

  return (
    <div className='header-full'>
      <div className='header container'>
        <div className='header_shopping-cart'>
          <p>己選擇</p>
          <h3>{shoppingCartNum}</h3>
          <p>個餐點</p>

        </div>
        <div className='header_logo'>
          <Link to='/'>
            <img src={logo} alt={logo} />
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Header