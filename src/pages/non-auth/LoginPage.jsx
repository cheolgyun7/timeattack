import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../axios/auth";

const LoginPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await authApi.post("/login", {
        id,
        password,
      });
      if (data.success) {
        console.log("로그인완료");
        localStorage.setItem("userId", id);
        localStorage.setItem("password", password);
        localStorage.setItem("accessToken", data.accessToken);
        navigate("/");
        return { data };
      }
    } catch (error) {
      alert("존재하지않는 유저입니다");
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Login page</p>

      <form onSubmit={loginSubmit}>
        <div>
          <label htmlFor="id">id</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
        <button
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입하러가기
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
