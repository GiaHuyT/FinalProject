import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom"; // dùng để render các trang con
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* nơi hiển thị nội dung của từng trang */}
      <Footer />
    </div>
  );
};

export default MainLayout;
