import React from 'react';

function Child({onClick}) {
  console.log('🔄 자식 렌더링됨');
  return <button onClick={onClick}>자식 버튼</button>;
}

//export default Child;
// React.memo를 사용하여 자식 컴포넌트가 부모의 상태 변화에 영향을 받지 않도록 최적화합니다.
export default React.memo(Child);



