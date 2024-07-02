import { useEffect, useState, useContext } from 'react'
import 'styles/checkComboModel.scss'
import InputQuantity from './InputQuantity'
import { getOneComboDetails } from 'server/server'
import { UserData } from 'context/UserContext'

interface combo {
  id: string,
  url: string,
  title: string,
  price: number,
  meals: string[],
}
interface drink {
  name: string,
  size: {
    size: string,
    price: string,
  }[],
  temperature: string[],
}
interface drinkOfChoice {
  name: string,
  size: string,
  temperature: string,
}

const CheckComboModel = (props: {
  id: string,
  onClick: () => void,
  drinkList: drink[],
  onAddShoppingCartNum: () => void,
}) => {
  const { id, onClick, drinkList, onAddShoppingCartNum } = props
  const [quantity, setQuantity] = useState<number>(1)
  const [comboDate, setComboDate] = useState<combo>()
  const [drinkOfChoice, setDrinkOfChoice] = useState<drinkOfChoice>()
  const [viewDrinkList, setViewDrinkList] = useState(false)
  const drinkOption = drinkList.find(item => item.name === drinkOfChoice?.name)

  const userData = useContext(UserData)
  const cartData = userData.cartData
  useEffect(() => {
    const comboItem = getOneComboDetails(id)
    if (comboItem) {
      setComboDate(comboItem)
    }
    const defaultDrinkOfChoice = {
      name: drinkList[0].name,
      size: drinkList[0].size[0].size,
      temperature: drinkList[0].temperature[0]
    }
    setDrinkOfChoice(defaultDrinkOfChoice)
  }, [])

  const handleChangeDrinkOption = (option: string, checked: string) => {
    if (drinkOfChoice) {
      if (option === 'size') {
        const newChoice = { ...drinkOfChoice, size: checked }
        setDrinkOfChoice(newChoice)
        return
      }
      const newChoice = { ...drinkOfChoice, temperature: checked }
      setDrinkOfChoice(newChoice)
    }
    if (option === 'size') {
      if (drinkOfChoice) {
        const obj = { ...drinkOfChoice }
        obj.size = checked
        setDrinkOfChoice(obj)
      }
      return
    }
    if (drinkOfChoice) {
      const obj = { ...drinkOfChoice }
      obj.temperature = checked
      setDrinkOfChoice(obj)
    }

  }
  const handleClickChangeDrink = (drinkName: string) => {
    if (drinkOfChoice) {
      const obj = { ...drinkOfChoice }
      obj.name = drinkName
      setDrinkOfChoice(obj)
    }
    setViewDrinkList(!viewDrinkList)
  }
  const findPlusPriceOfDrink = (drink: drinkOfChoice) => {
    const drinkName = drinkList.find(item => item.name === drink.name)
    const drinkPrice = drinkName?.size.find(item => item.size === drink.size)
    const plusPrice = drinkPrice?.price
    if (plusPrice) {
      const plus = +plusPrice - 20
      return plus
    }
  }
  const handleClickButton = (boolean: boolean) => {
    if (!boolean) {
      setQuantity(1)
      onClick()
      return
    }
    if (comboDate && drinkOfChoice) {
      for (let n = 1; n <= quantity; n++) {
        const plusPriceOfDrink = findPlusPriceOfDrink(drinkOfChoice)
        const combo = {
          title: comboDate.title,
          meals: comboDate.meals,
          drink: drinkOfChoice,
          price: comboDate.price,
        }
        if (plusPriceOfDrink) {
          combo.price += plusPriceOfDrink
        }
        cartData.combos.push(combo)
      }
    }
    onAddShoppingCartNum()
    onClick()
  }


  return (
    <div
      className='check-combo-model_full'
    >
      <div className="check-combo-model">
        <div className="check-combo-model_content">
          <h2>{comboDate?.title}</h2>
          <ul >
            {comboDate?.meals.map(item =>
              <li key={item}>{item}</li>
            )}

            <li>
              {drinkOfChoice?.name}
              <span
                className='check-combo-model_content_drink-change'
                onClick={() => setViewDrinkList(prev => !prev)}
              >換飲料</span>
              <div className='check-combo-model_content_drink'>
                <div className='check-combo-model_content_drink_size'>
                  {
                    drinkOption?.size.map(item =>
                      <label key={item.size}>
                        <input type="radio" name="size" value={item.size}
                          checked={drinkOfChoice?.size === item.size}
                          onChange={(e) => handleChangeDrinkOption('size', e.target.value)}
                        />
                        <span>{item.size}</span>
                      </label>
                    )
                  }
                </div>
                <div className="check-combo-model_content_drink_temperature">
                  {drinkOption?.temperature.map(item =>
                    <label key={item}>
                      <input type="radio" name="drink" value={item}
                        checked={drinkOfChoice?.temperature === item ? true : false}
                        onChange={(e) => handleChangeDrinkOption('temperature', e.target.value)}
                      />
                      <span>{item}</span>
                    </label>
                  )}
                </div>
              </div>
            </li>

          </ul>
        </div>
        <div className="check-combo-model_quantity">
          <InputQuantity
            value={+quantity}
            onChange={(value) => setQuantity(value)}
          />
        </div>
      </div>
      <div className='check-combo-model_button-wrap'>
        <button onClick={() => handleClickButton(true)}>確認加入</button>
        <button onClick={() => handleClickButton(false)}>重選一次</button>
      </div>
      {
        viewDrinkList &&
        <div className="drink-list-full">
          <div
            className='drink-list-back'
            onClick={() => setViewDrinkList(!viewDrinkList)}
          >X</div>
          <ul className='drink-list-wrap'>
            {drinkList.map(drink =>
              <li
                key={drink.name}
                onClick={() => handleClickChangeDrink(drink.name)}
              >
                <p>
                  {drink.name}
                </p>
                <span>+{+drink.size[0].price - 20}元</span>
              </li>
            )}
          </ul>
        </div>
      }
    </div>
  )
}
export default CheckComboModel