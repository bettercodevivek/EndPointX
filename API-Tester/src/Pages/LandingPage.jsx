import React from "react";
import { FaRocket, FaCode, FaBolt, FaMoon, FaUserShield, FaGithub, FaGithubAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 md:px-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 animate-fade-in">
          EndPointX - A Visual API Tester
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Your minimal, fast, login-free Postman alternative 🚀
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/tester"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg"
          >
            🚀 Launch Now
          </Link>
          <a
            href="#features"
            className="border border-blue-500 hover:bg-blue-500 hover:text-white transition px-6 py-3 rounded-xl text-blue-300 font-semibold"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Screenshot Preview */}
      <section className="flex justify-center px-4 mb-16">
        <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
          <img
            src="https://i.postimg.cc/Z5J88QWb/Screenshot-2025-04-06-160431.png"
            alt="Preview of API Tester"
            className="w-full h-auto object-cover blur-sm hover:blur-none transition duration-300"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 md:px-20 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10">✨ Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
            <FaRocket className="text-3xl text-cyan-400 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Fast Requests</h3>
            <p className="text-gray-300">Blazing fast request handling with timer stats.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
            <FaCode className="text-3xl text-pink-400 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Clean JSON Viewer</h3>
            <p className="text-gray-300">Syntax-highlighted response body with copy feature.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
            <FaBolt className="text-3xl text-yellow-400 mb-4" />
            <h3 className="font-semibold text-xl mb-2">No Signup Needed</h3>
            <p className="text-gray-300">Just open and start testing APIs. No login barriers.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">💡 Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <FaUserShield className="text-4xl text-green-400 mb-4 mx-auto" />
            <h4 className="font-semibold text-lg mb-1">Privacy First</h4>
            <p className="text-gray-400">No account, no tracking — just pure dev tooling.</p>
          </div>
          <div>
            <FaMoon className="text-4xl text-purple-400 mb-4 mx-auto" />
            <h4 className="font-semibold text-lg mb-1">Dark Mode</h4>
            <p className="text-gray-400">Built-in theme toggling for comfort and style.</p>
          </div>
          <div>
            <FaCode className="text-4xl text-cyan-400 mb-4 mx-auto" />
            <h4 className="font-semibold text-lg mb-1">Dev Friendly</h4>
            <p className="text-gray-400">Designed by devs, for devs. Fully open source.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-sm text-gray-500 flex flex-col items-center justify-center text-center">
        <p>
          Developed By <span className="font-bold">BetterCodeVivek</span>
        </p>
        <a
          href="https://github.com/BetterCodeVivek"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 hover:text-white"
        >
          <FaGithub className="text-xl" />
        </a>
      </footer>
    </div>
  );
};

export default LandingPage;
