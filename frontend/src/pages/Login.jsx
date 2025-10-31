import React, { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import { Phone } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    Phonenumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert("Đăng nhập thành công!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Lỗi server");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative px-4 bg-black text-white overflow-hidden">
      {/* Dynamic streak lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#f97316_0_2px,transparent_2px_8px)] opacity-30 animate-[spin_120s_linear_infinite]"></div>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#3b82f6_0_2px,transparent_2px_8px)] opacity-20 animate-[spin_180s_linear_reverse_infinite]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div className="max-w-md mx-auto md:ml-auto md:mr-8 space-y-4 text-center md:text-left">
          <h1 className="text-blue-600 text-5xl font-bold mb-4">GoalTrack</h1>
          <p className="text-2xl text-gray-300 leading-tight">
            Kết nối với cộng đồng bóng đá và theo dõi các trận đấu yêu thích của bạn
          </p>
        </div>

        {/* Right Column - Form */}
        <div className="max-w-md w-full mx-auto space-y-8">
          <div className="bg-white/5 py-8 px-6 shadow-2xl rounded-xl backdrop-blur-md border border-white/20">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 text-lg border border-white/40 rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="password"
                name="password"
                placeholder="Mật khẩu"
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 text-lg border border-white/40 rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-white text-xl font-bold rounded-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] transition duration-200"
              >
                Đăng nhập
              </button>
            </form>

            <div className="mt-4 text-center">
              <a href="#" className="text-yellow-400 text-sm hover:underline">
                Quên mật khẩu?
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-white/30">
              <button
                onClick={() => navigate("/register")}
                className="mx-auto block px-8 py-3.5 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition duration-200"
              >
                Tạo tài khoản mới
              </button>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400">
            <span className="font-bold hover:underline cursor-pointer text-yellow-400">
              Tạo Trang
            </span>{" "}
            dành cho câu lạc bộ, đội bóng hoặc doanh nghiệp của bạn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
