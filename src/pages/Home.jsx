import React from "react";

const Home = () => {
  const loginInfo = localStorage.getItem("accessToken");
  const nickname = localStorage.getItem("userId");

  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>
      {loginInfo ? <p>안녕하세요, {nickname}!</p> : <p>로그인을 해주세요.</p>}
      {/* 로그인 여부에 따라 조건부 렌더링 */}
    </div>
  );
};

export default Home;
