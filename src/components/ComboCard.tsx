import 'styles/comboCard.scss'

const ComboCard = (props: {
  id: string,
  url: string,
  title: string
  price: string | number,
  onClick: (id: string) => void
}) => {
  const { id, url, title, price, onClick } = props
  return (
    <div className='combo-card-full'>
      <div
        className='combo-card'
        onClick={() => onClick(id)}
      >
        <div className='combo-card_img-wrap'>
          <img src={url} alt={url} />
        </div>
        <div className='combo-card_title'>
          <h2>{title}</h2>
        </div>
        <div className='combo-card_price'>
          <h3>{price}</h3>
          <p>元</p>
        </div>
      </div>
    </div>
  )
}
export default ComboCard;
