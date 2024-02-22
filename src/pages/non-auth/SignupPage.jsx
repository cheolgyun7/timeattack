import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../axios/auth";
import axios from "axios";

const SignupPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await authApi.post("/register", {
        id,
        password,
        nickname,
      });
      if (data.success) {
        alert("회원가입에 성공하였습니다");
        navigate("/login");
      }
    } catch (error) {
      alert("이미 존재하는 유저id입니다");
      console.log("에러", error);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      <p>Signup page</p>

      <form onSubmit={formSubmit}>
        <div>
          <label htmlFor="id">id</label>
          <input
            type="text"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="nickname">nickname</label>
          <input
            type="text"
            name="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Signup</button>
        <button
          type="button"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인하러가기
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

export default SignupPage;
