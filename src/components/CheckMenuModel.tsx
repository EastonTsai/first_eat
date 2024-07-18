import 'styles/checkMenuModel.scss'
import InputQuantity from './InputQuantity'
import { useState, useContext } from 'react'
import { UserData } from 'context/UserContext'

type mealData = {
  title: string,
  price: number,
  remark: string[],
}

const CheckMenuModel = (props: {
  onClick: () => void,
  onAddShoppingCartNum: () => void,
  mealData?: mealData,
}) => {
  const userData = useContext(UserData)
  const cartData = userData.cartData
  const { onClick, onAddShoppingCartNum, mealData } = props
  const [quantity, setQuantity] = useState<number>(1)

  const handleClickButton = (boolean: boolean) => {
    if (!boolean) {
      setQuantity(1)
      onClick()
      return
    }
    if (mealData) {
      for (let i = 1; i <= quantity; i++) {
        const newMeal = {
          name: mealData?.title,
          price: mealData?.price
        }
        cartData.meals.push(newMeal)
      }
    }
    onAddShoppingCartNum()
    onClick()
  }

  return (
    <div
      className='check-menu-model_full'
    >
      <div className="check-menu-model">
        <div className="check-menu-model_content">
          {/* 這裡要放餐點顯示的內容 */}
          <h2>{mealData?.title}</h2>
          <div className="check-menu-mode_content_remark">
            {mealData?.remark.map(item =>
              <p>{item}</p>
            )}
          </div>
        </div>
        <div className="check-menu-model_quantity">
          <InputQuantity
            value={+quantity}
            onChange={(value) => setQuantity(value)}
          />
        </div>
      </div>
      <div className='check-menu-model_button-wrap'>
        <button onClick={() => handleClickButton(true)}>確認加入</button>
        <button onClick={() => handleClickButton(false)}>重選一次</button>
      </div>
    </div>
  )
}
export default CheckMenuModel