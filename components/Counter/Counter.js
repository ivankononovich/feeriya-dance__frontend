import css1 from './counter.scss'

import { useSelector, useDispatch } from 'react-redux'

import {
  increaseCounterValue,
  reduceCounterValue,
} from './../../store/counter/actions'

const Counter = () => {
  const counter = useSelector((state) => state.counter.counterValue)
  const dispatch = useDispatch()

  return (
    <div className={css1['counter']}>
      <span
        className={css1['counter__btn']}
        onClick={() => dispatch(reduceCounterValue())}
      >
        –
      </span>
      <div className={css1['counter__value']}>{counter}</div>
      <span
        className={css1['counter__btn']}
        onClick={() => dispatch(increaseCounterValue())}
      >
        +
      </span>
    </div>
  )
}

export default Counter
