import React from 'react';// 리액트를 사용하기 위함
import ReactDOM from 'react-dom/client';//리액트 DOM을 사용하기 위함
import './index.css';//css
import App from './App';//App 컴포넌트
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));//createRoot() : 매개변수에 React 루트를 만들고 반환.
root.render(//반환된 루트로 rneder를 통해 React 엘리먼트를 DOM으로 랜더링
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
