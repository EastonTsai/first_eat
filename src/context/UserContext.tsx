import { ReactNode, createContext } from "react";

type combo = {
  title: string,
  meals: string[],
  drink: { name: string, size: string, temperature: string },
  price: string | number
}
type meal = {
  name: string,
  price: number | string,
}

const userDataType: {
  userId?: string,
  name?: string,
  cartData: { combos: combo[], meals: meal[] },
} = {
  cartData: { combos: [], meals: [] }
}

export const UserData = createContext(userDataType)

const UserContext = (props: { children: ReactNode }) => {
  return (
    <UserData.Provider value={userDataType}>
      {props.children}
    </UserData.Provider>
  )
}
export default UserContext;