import 'styles/header.scss'
import { Link } from 'react-router-dom'
import logo from 'files/Hamburger walk.jpg'
import { ReactComponent as ArrowRight } from 'files/arrow right.svg'
import { ReactComponent as ArrowLeft } from 'files/arrow left.svg'
import menuIcon from 'files/🦆 icon _menu_.svg'
import cartIcon from 'files/cart.svg'
import arrowRight from 'files/arrow right.svg'
import arrowLeft from 'files/arrow left.svg'
import { useEffect, useState } from 'react'

const Header = () => {
  const [headerList, setHeaderList] = useState<string[]>([])

  useEffect(() => {
    const list = [
      '今日特餐',
      '假日特餐',
      '上班特餐',
      '漢堡',
      '三明治',
      '土司',
      '麵食',
      '燉飯',
      '點心',
      '飲品',
    ]
    setHeaderList(list)
  }, [])

  return (
    <div className='header'>
      <div className='header-container container'>
        <div className='header_menu'>
          <ul className='header_menu_list'>

          </ul>
          <div className='header_menu_icon'>
            <img src={menuIcon} alt={menuIcon} />
          </div>
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
      <div className='header_list container'>
        <ArrowLeft />
        <ul className='header_list_list'>
          {headerList.map(item =>
            <Link key={item} to='/'>
              <li>{item}</li>
            </Link>)}
        </ul>
        <ArrowRight />
      </div>
    </div>
  )
}
export default Header