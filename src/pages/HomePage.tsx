import About from 'components/About'
import Combo from 'components/Combo'
import Favorite from 'components/Favorite'
import Header from 'components/Header'
import MainSelection from 'components/MainSelection'
import Menu from 'components/Menu'
import UserContext from 'context/UserContext'
import { useState, useContext } from 'react'
import { UserData } from 'context/UserContext'
import 'styles/homePage.scss'

type shoppingCartData = {
  id: string,
  num: number,
}

const HomePage = () => {
  const selection = ['套餐', '單點', '結帳', '最愛', '我的']
  const [current, setCurrent] = useState(selection[0])
  const [shoppingCartNum, setShoppingCartNum] = useState(0)
  const userData = useContext(UserData)
  const handleAddShoppingCartNum = () => {
    const combos = userData.cartData?.combos.length
    const meals = userData.cartData?.meals.length
    const num: number | string = combos + meals
    setShoppingCartNum(num)
  }

  return (
    <div className='home-page'>
      <UserContext>
        <Header shoppingCartNum={shoppingCartNum} />
        <main className='home-page_main-full'>
          <div className='home-page_main'>
            {current === selection[0] && <Combo onAddShoppingCartNum={handleAddShoppingCartNum} />}
            {current === selection[1] && <Menu onAddShoppingCartNum={handleAddShoppingCartNum} />}
            {current === selection[3] && <Favorite />}
            {current === selection[4] && <About />}
          </div>
        </main>
        <MainSelection
          onChange={setCurrent}
          selection={selection}
        />
      </UserContext>
    </div>
  )
}
export default HomePage