import { MouseEventHandler, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount: MouseEventHandler<HTMLButtonElement> = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseCount: MouseEventHandler<HTMLButtonElement> = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={increaseCount}>더하기</button>
      <button onClick={decreaseCount}>빼기</button>
    </div>
  );
};

export default Counter;
