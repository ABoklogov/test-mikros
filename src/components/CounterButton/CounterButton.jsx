import { useState } from 'react';
import s from './CounterButton.module.css';

const CounterButton = () => {
  const [number, setNumber] = useState(1);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    if (number <= 1) {
      setNumber(1);
      return;
    }
    setNumber(number - 1);
  };

  return (
    <div className={s.box}>
      <button onClick={decrement} className={s.btn}>
        -
      </button>
      <span className={s.number}>{number}</span>
      <button onClick={increment} className={s.btn}>
        +
      </button>
    </div>
  );
};

export default CounterButton;
