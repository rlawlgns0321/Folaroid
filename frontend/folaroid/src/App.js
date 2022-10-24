import { React } from 'react';

function App() {
  const name = '미예';
  return (
    <>
      {name === '미애'? (
      <h1>{name} 안녕</h1>) : (
        <h2>넌 미애가 아냐</h2>
      )}
    </>
  );
}

export default App;
