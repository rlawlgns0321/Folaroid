import React from 'react';

const MyPage = (props) => {
  const { name } = props;
  const onClick = () => {
    alert('내정보작성페이지 갈거임');
  };
  return (
    <>
      <div className="react">{name}</div>
      <div>
        <div className="info">최초 정보를 작성해주세요.</div>
        <button onClick={onClick}>내정보 작성하기</button>
      </div>
    </>
  );
};

MyPage.defaultProps = {
  name: 'MyPage',
};

export default MyPage;
