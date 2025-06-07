import { useState, useCallback } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleLog = useCallback(() => {
    console.log('나는 변하지 않는 함수');
  }, []);

  return (
    <div>
      <h3>부모 컴포넌트</h3>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>카운트: {count}</p>
      <Child onClick={handleLog} />
    </div>
  );
}
