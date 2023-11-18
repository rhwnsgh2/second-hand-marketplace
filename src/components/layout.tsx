import { useState } from "react";

export const Layout = () => {
  const [count, setCount] = useState(100);
  return (
    <div>
      <button
        style={{
          backgroundColor: "red",
          width: "200px",
          height: "200px",
          padding: "10px",
          borderRadius: "10px",
        }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        카운트 늘리기
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        리셋하기
      </button>
      <button
        onClick={() => {
          setCount(count * 2);
        }}
      >
        곱하기 !!
      </button>
      <div> {count}번 눌렸습니다.</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "blue",
          gap: "10px",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "5px solid black",
            width: "50px",
            height: "50px",
            backgroundColor: "red",
          }}
        ></div>
        <div
          style={{
            border: "5px solid black",
            width: "50px",
            height: "50px",
            backgroundColor: "red",
          }}
        ></div>
        <div
          style={{
            border: "5px solid black",
            width: "50px",
            height: "50px",
            backgroundColor: "red",
          }}
        ></div>
        <div
          style={{
            border: "5px solid black",
            width: "50px",
            height: "50px",
            backgroundColor: "red",
          }}
        ></div>
        <div
          style={{
            border: "5px solid black",
            width: "50px",
            height: "50px",
            backgroundColor: "red",
          }}
        ></div>
      </div>
    </div>
  );
};
