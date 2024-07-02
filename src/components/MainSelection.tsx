import { useState } from 'react'
import 'styles/mainSelection.scss'
import arrowTop from 'files/chevrons-up.svg'

const MainSelection = (
  props: {
    onChange: (current: string) => void,
    selection: string[]
  }
) => {
  const { onChange, selection } = props
  const [isFocus, setIsFocus] = useState(selection[0])

  const handleClick = (item: string) => {
    setIsFocus(item)
    onChange(item)
  }

  return (
    <div className='main-selection-full'>
      <div className='main-selection container'>
        {
          selection.map(item => {
            if (item === '結帳') {
              return (
                <div key={item} className='main-selection_checkout'>
                  <div className='main-selection_checkout_circle'>
                    <div className='main-selection_checkout_circle_text'>
                      <h2>GO</h2>
                      <p>結帳</p>
                    </div>
                  </div>
                </div>
              )
            }
            return (
              <div key={item} onClick={() => handleClick(item)}>
                <div
                  className={`arrow-top ${isFocus === item && 'isFocus'}`}
                >
                  <img src={arrowTop} alt={arrowTop} />
                </div>
                <div>{item}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default MainSelection