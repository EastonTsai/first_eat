import { useEffect, useState } from 'react'
import { getMeals, getMealsCategory } from 'server/server'
import 'styles/menu.scss'
import MealCard from './MealCard'
import CheckMenuModel from './CheckMenuModel'

type meal = {
  name: string,
  price: number,
  remark: string[],
  picture: string,
}
type mealData = {
  title: string,
  price: number,
  remark: string[],
}
const Menu = (props: {
  onAddShoppingCartNum: () => void,
}) => {
  const { onAddShoppingCartNum } = props
  const [category, setCategory] = useState<string[]>([])
  const [focusCategory, setFocusCategory] = useState(category[0])
  const [viewCheckModel, setViewCheckModel] = useState(false)
  const [meals, setMeals] = useState<meal[]>([])
  const [mealData, setMealData] = useState<mealData>()

  // useEffect(() => {
  //   setViewCheckModel(!viewCheckModel)
  // }, [mealData])
  useEffect(() => {
    if (category.length < 1) {
      const array = getMealsCategory()
      if (array) {
        setCategory(array)
        setFocusCategory(array[0])
      }
    }
  }, [])
  useEffect(() => {
    const meals = getMeals(focusCategory)
    if (meals) {
      setMeals(meals)
    }
  }, [focusCategory])

  const handelClickMeal = (title?: string, price?: number, remark?: string[]) => {
    if (title && price && remark) {
      const meal = {
        title,
        price,
        remark
      }
      setMealData(meal)
      setViewCheckModel(!viewCheckModel)
      return
    }
    setViewCheckModel(!viewCheckModel)
  }


  return (
    <div className="menu_full">
      <div className='menu container'>
        <ul className="menu_select">
          {
            category?.map(item =>
              <li
                key={item}
                onClick={() => setFocusCategory(item)}
                className={`menu_select_option ${item === focusCategory && 'focus'} `}
              >{item}</li>
            )
          }
        </ul>
        <div className="menu_list">
          {meals.map(meal =>
            <MealCard
              key={meal.name}
              title={meal.name}
              price={meal.price}
              remark={meal.remark}
              picture={meal.picture}
              onClick={handelClickMeal}
            />
          )}
        </div>
      </div>
      {viewCheckModel &&
        <CheckMenuModel
          onClick={handelClickMeal}
          onAddShoppingCartNum={onAddShoppingCartNum}
          mealData={mealData}
        />
      }
    </div>
  )
}
export default Menu