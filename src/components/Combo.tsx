import 'styles/combo.scss'
import ComboCard from './ComboCard';
import CheckComboModel from './CheckComboModel';
import { useEffect, useState } from 'react';
import { getComboProductList } from 'server/server';

interface product {
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

const Combo = (props: {
  onAddShoppingCartNum: () => void,
}) => {
  const { onAddShoppingCartNum } = props
  const [comboProductList, setComboProductList] = useState<product[]>([])
  const [drinkList, setDrinkList] = useState<drink[]>([])
  const [viewCheckModel, setViewCheckModel] = useState(false)
  const [checkModelId, setCheckModelId] = useState('')
  useEffect(() => {
    const res = getComboProductList()
    if (res) {
      setComboProductList(res.comboList)
      setDrinkList(res.drinkList)
    }
  }, [])

  const handelClickProduct = (id?: string) => {
    if (!id) {
      setViewCheckModel(!viewCheckModel)
      return
    }
    setCheckModelId(id)
    setViewCheckModel(!viewCheckModel)
  }

  return (
    <div className='combo container'>
      {
        comboProductList?.map(item =>
          <ComboCard
            key={item.id}
            id={item.id}
            url={item.url}
            title={item.title}
            price={item.price}
            onClick={handelClickProduct}
          />
        )
      }
      {
        viewCheckModel &&
        <CheckComboModel
          id={checkModelId}
          onClick={handelClickProduct}
          drinkList={drinkList}
          onAddShoppingCartNum={onAddShoppingCartNum}
        />
      }
    </div>
  )
}
export default Combo;

