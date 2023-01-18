import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home";
import Search from "./component/search";
import Login from "./component/login";
import Mypage from "./component/mypage";
import Channelup from "./component/channelup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <GlobalStyles/>    */}
        <Routes>
            {/* 홈 */}
            <Route exact path="/" element={<Home />}/>
            {/* 홈 */}
            <Route exact path="home" element={<Home />}/>
            {/* 채널등록페이지 */}
            <Route exact path="channelup" element={<Channelup />}/>
            {/* 검색 */}
            <Route exact path="search" element={<Search />}/>
            {/* 로그인 */}
            <Route exact path="login" element={<Login />}/>
            {/* 마이페이지 */}
            <Route exact path="mypage" element={<Mypage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
