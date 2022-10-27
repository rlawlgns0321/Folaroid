import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    console.log('특정값이 변할때만 찍힘');
    console.log({ name });
  }, [name]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <div>
        <p>{value}</p>
        <button onClick={() => setValue(value + 1)}>+1</button>
        <button onClick={() => setValue(value - 1)}>-1</button>
      </div>
      <>
        <b>이름 : </b>
        <input value={name} onChange={onChangeName}></input>
        {name}
      </>
    </div>
  );
};

export default Counter;
