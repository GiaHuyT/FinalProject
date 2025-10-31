import React, { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import { User, Mail, Smartphone, Lock } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", formData);
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Lỗi server");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      {/* Dynamic sport lines */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#f97316_0_2px,transparent_2px_8px)] opacity-30 animate-[spin_120s_linear_infinite]"></div>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#3b82f6_0_2px,transparent_2px_8px)] opacity-20 animate-[spin_180s_linear_reverse_infinite]"></div>
      </div>

      {/* Main card */}
      <div className="relative z-10 w-full max-w-md p-10 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.5)] transition-shadow duration-500">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400">
            GoalTrack
          </h2>
          <p className="text-sm text-gray-300 mt-2 tracking-wide">
            Tham gia cộng đồng năng động 💪
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-80" />
            <input
              type="text"
              name="name"
              placeholder="Họ và tên"
              onChange={handleChange}
              required
              className="w-full pl-10 px-4 py-3 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-80" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full pl-10 px-4 py-3 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Phone Number */}
          <div className="relative">
            <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-80" />
            <input
              type="text"
              name="phonenumber"
              placeholder="Số điện thoại"
              onChange={handleChange}
              required
              className="w-full pl-10 px-4 py-3 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-80" />
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu mới"
              onChange={handleChange}
              required
              className="w-full pl-10 px-4 py-3 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-400 leading-5 mt-3">
            Bằng cách nhấp vào{" "}
            <span className="text-orange-400 font-medium">Đăng ký</span>, bạn đồng ý với{" "}
            <a href="#" className="text-red-400 hover:underline">Điều khoản</a>,{" "}
            <a href="#" className="text-red-400 hover:underline">Chính sách dữ liệu</a> và{" "}
            <a href="#" className="text-red-400 hover:underline">Chính sách cookie</a>.
          </p>

          {/* Submit button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="relative px-10 py-3 font-semibold text-lg rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] transition-all duration-300"
            >
              <span className="relative z-10">Đăng ký</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 blur-lg opacity-50"></span>
            </button>
          </div>

          {/* Switch to login */}
          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-sm text-blue-300 hover:underline hover:text-red-400 transition"
            >
              Bạn đã có tài khoản? Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
