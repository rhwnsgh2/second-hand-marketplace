import React, { useState } from "react";

const SignUpForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // 폼 제출 로직을 구현합니다.
  };

  // 인라인 스타일 정의
  const formContainerStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
  };

  const formFieldStyle = {
    marginBottom: "15px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div style={formContainerStyle}>
      <form onSubmit={handleSubmit}>
        <div style={formFieldStyle}>
          <label style={labelStyle}>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
            />
          </label>
        </div>
        <div style={formFieldStyle}>
          <label style={labelStyle}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </label>
        </div>
        <div style={formFieldStyle}>
          <label style={labelStyle}>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
          </label>
        </div>
        <button type="submit" style={buttonStyle}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
