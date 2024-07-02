import { dummyComboList, dummyDrinkList, dummySingleMealList } from "./database"


export const getComboProductList = () => {
  const comboList = dummyComboList
  const drinkList = dummyDrinkList
  return { comboList, drinkList }
}

export const getOneComboDetails = (id: string) => {
  const comboItem = dummyComboList.find(item => item.id === id)
  return comboItem
}

export const getMeals = (category: string) => {
  const list = dummySingleMealList
  const meals = list.find(item => item.category === category)?.meals
  return meals
}
export const getMealsCategory = () => {
  const list = dummySingleMealList
  let category = list.map(item => item.category)
  return category
}