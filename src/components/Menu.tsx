import { useEffect, useState } from 'react'
import { getMeals, getMealsCategory } from 'server/server'
import 'styles/menu.scss'
import MealCard from './MealCard'

type meal = {
  name: string,
  price: number,
  remark: string[],
  picture: string,
}

const Menu = () => {
  const [category, setCategory] = useState<string[]>([])
  const [focusCategory, setFocusCategory] = useState(category[0])
  const [meals, setMeals] = useState<meal[]>([])

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
            />
          )}
        </div>
      </div>
    </div>
  )
}
export default Menu