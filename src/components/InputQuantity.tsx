import 'styles/inputQuantity.scss';

const InputQuantity = (props: {
  value: number,
  onChange: (value: number) => void,
}) => {
  const { value, onChange } = props

  return (
    <div className='input-quantity'>
      <div
        className='input-quantity_plus'
        onClick={() => +value <= 98 && onChange(+value + 1)}
      >
        <p>+</p>
      </div>
      <div className='input-quantity_input-wrap'>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(+e.target.value)}
        />
      </div>
      <div
        className='input-quantity_minus'
        onClick={() => +value > 1 && onChange(+value - 1)}
      >
        <p>-</p>
      </div>
    </div>
  )
}
export default InputQuantity;