import {useState} from 'react';

export type UseCounterType = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export function useCounter(): UseCounterType {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  const onDecrement = () => {
    setCount(count - 1);
  };

  return {
    count,
    onIncrement,
    onDecrement,
  };
}
