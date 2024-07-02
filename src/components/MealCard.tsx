import { Fragment } from 'react/jsx-runtime'
import 'styles/mealCard.scss'

const MealCard = (props: {
  title: string,
  remark?: string[],
  price: number,
  picture?: string,
}) => {
  const { title, remark, price, picture } = props

  return (
    <div className="meal-card">
      <div className='meal-card_text'>
        <h2>{title}</h2>
        <div className='meal-card_text_remark'>
          {remark?.map((item, index) =>
            index === remark.length - 1 ?
              (<span key={item}>{item}</span>)
              :
              <Fragment key={item}>
                <span>{item}</span>
                <span>+</span>
              </Fragment>
          )}
        </div>
        <h4>$<span>{price}</span></h4>
      </div>
      <div className='meal-card_image'>
        <img src={picture} alt={''} />
      </div>
    </div>
  )
}
export default MealCard