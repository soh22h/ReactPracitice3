// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import "./App.css";
import Footer from "./components/Footer";
import ProductsForMan from "./components/ManProducts";
import ProductsForWoman from "./components/WomanProducts";
// 기타 필요한 컴포넌트 임포트

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      {/* 라우트 설정 */}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/men" element={<ProductsForMan />} />
        <Route path="/women" element={<ProductsForWoman />} />
        {/* 다른 페이지 라우트 설정 */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
