import React, { useState } from 'react'

// 这两个hooks是useSelector和useDispatch的TS封装
import { useAppSelector, useAppDispatch } from '../../hooks';

// 这就是我们在redux传统架构中的action
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync
} from '../../store/reducers/counter';

// 样式
import styles from './style.css';

// 页面组件
export default function Counter() {

  const count = useAppSelector(({counter})=>counter.value);
  const dispatch = useAppDispatch();

  console.log('---count', count)

  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <h1>重构后的我们的页面</h1>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
