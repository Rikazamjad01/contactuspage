// app/page.tsx
"use client";

import { Player } from "@lottiefiles/react-lottie-player";

import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 p-6">
      {/* Website Name */}
      <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mt-12">
        MyWebsite
      </h1>

      {/* Lottie Animation Section */}
      <div className="flex flex-col items-center justify-center flex-1">
        <Player
          autoplay
          loop
          src="https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json" // replace with your own Lottie
          style={{ height: "300px", width: "300px" }}
        />
        <p className="text-gray-700 mt-4 text-lg md:text-xl">
          Stay Connected
        </p>
      </div>

      {/* Social Links */}
      <div className="w-full max-w-md bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 mb-8">
        <h2 className="text-center text-lg font-semibold mb-6 text-gray-700">
          Connect with us
        </h2>

        <div className="space-y-4">
          {/* TikTok */}
          <a
            href="https://tiktok.com"
            target="_blank"
            className="flex items-center justify-between p-4 rounded-xl bg-white hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 transition shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <FaTiktok size={30} className="text-black" />
              <div>
                <p className="text-gray-900 font-medium">TikTok</p>
                <p className="text-gray-500 text-sm">12.4K Followers</p>
              </div>
            </div>
            <FaExternalLinkAlt
              size={18}
              className="text-gray-400 hover:text-gray-600 transition"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            className="flex items-center justify-between p-4 rounded-xl bg-white hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 transition shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <FaInstagram size={30} className="text-pink-500" />
              <div>
                <p className="text-gray-900 font-medium">Instagram</p>
                <p className="text-gray-500 text-sm">8.6K Followers</p>
              </div>
            </div>
            <FaExternalLinkAlt
              size={18}
              className="text-gray-400 hover:text-gray-600 transition"
            />
          </a>

          {/* WhatsApp */}
          <a
            href="https://whatsapp.com"
            target="_blank"
            className="flex items-center justify-between p-4 rounded-xl bg-white hover:bg-gradient-to-r hover:from-green-50 hover:to-teal-100 transition shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <FaWhatsapp size={30} className="text-green-500" />
              <div>
                <p className="text-gray-900 font-medium">WhatsApp</p>
                <p className="text-gray-500 text-sm">Chat with us</p>
              </div>
            </div>
            <FaExternalLinkAlt
              size={18}
              className="text-gray-400 hover:text-gray-600 transition"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
