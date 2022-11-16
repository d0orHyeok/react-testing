import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState<string | number>(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((state) => state + 1)}>increase</button>
      <input type="number" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={() => setCount(Number(amount))}>Set</button>
    </div>
  );
};

export default Counter;
