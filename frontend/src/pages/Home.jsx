import React, { useState, useEffect } from "react";
import player from "../assets/player.png";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  // Cập nhật trạng thái dark mode khi Navbar toggle
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const matches = [
    { id: 1, home: "FC Barcelona", away: "Real Madrid", score: "2 - 1", time: "45'", live: true },
    { id: 2, home: "Manchester United", away: "Liverpool", score: "1 - 1", time: "78'", live: true },
    { id: 3, home: "Juventus", away: "AC Milan", score: "0 - 0", time: "HT", live: false },
    { id: 4, home: "Chelsea", away: "Arsenal", score: "3 - 2", time: "90'", live: true },
    { id: 5, home: "PSG", away: "Lyon", score: "1 - 0", time: "60'", live: false },
  ];

  return (
    <div className={`pt-24 min-h-screen relative overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:3px_3px] animate-[spin_100s_linear_infinite]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:4px_4px] animate-[spin_150s_linear_reverse_infinite]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-6">
        {/* Matches */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4">
            ⚽ Trận đấu trực tiếp
          </h2>
          <div className="flex overflow-x-auto gap-4 pb-2">
            {matches.map((match) => (
              <div
                key={match.id}
                className={`min-w-[250px] p-4 rounded-xl border backdrop-blur-md shadow-lg hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] transition
                  ${match.live
                    ? isDarkMode ? "bg-red-900/30 border-red-700/40" : "bg-red-50 border-red-400/40"
                    : isDarkMode ? "bg-gray-800/40 border-gray-700/30" : "bg-white/40 border-gray-300/20"
                  }`}
              >
                <div className="flex justify-between font-semibold text-lg mb-2">
                  <span>{match.home}</span>
                  <span>{match.away}</span>
                </div>
                <div className="flex justify-between items-center text-xl font-bold mb-2">
                  <span className={match.live ? "text-red-500" : "text-green-500"}>{match.score}</span>
                  <span className="text-gray-400">{match.time}</span>
                </div>
                <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Players */}
        <section>
          <h2 className="text-3xl font-extrabold mb-6 text-center text-yellow-400">
            Cầu thủ nổi bật
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i)=>(
              <div key={i} className={`rounded-xl p-4 shadow-lg backdrop-blur-md transition transform hover:-translate-y-1
                ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white/30 border-white/20"} hover:shadow-[0_0_50px_rgba(0,0,0,0.2)]`}>
                <img src={player} alt="Player" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-2">
                  Cầu thủ {i}
                </h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Đội bóng: Team {i}</p>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Vị trí: Tiền đạo</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
