// app/page.tsx
"use client";
import Image from "next/image";
// import dynamic from "next/dynamic";
// // const Player = dynamic(
// //   () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
// //   { ssr: false }
// // );
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaExternalLinkAlt,
} from "react-icons/fa";


import ReactCountryFlag from "react-country-flag";
import { Berkshire_Swash } from "next/font/google";

const berkshire = Berkshire_Swash({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-black p-6">
      {/* Website Name */}
      <h1 className={`${berkshire.className} text-3xl md:text-4xl font-bold text-white mt-12 flex items-center gap-5`}>
        MIRAAL LUXE <ReactCountryFlag countryCode="CA" svg style={{ width: "30px", height: "1em" }}/>
      </h1>

      {/* Website Logo */}
      <div className="">
        <Image
          src="https://res.cloudinary.com/dxxymlo0o/image/upload/v1757080153/WhatsApp_Image_2025-09-05_at_18.37.51_f6686c13_kdnedl.jpg" // <-- replace with your logo path (put logo.png in public/)
          alt="Miraal Luxe Logo"
          width={280}
          height={180}
          className="object-contain"
        />
      </div>

      {/* Website Description */}
      <p className="text-gray-300 mt-4 text-center text-lg md:text-xl mb-2">
        All Pakistani designers wear outfit available by{" "}
        <span className={`${berkshire.className} font-semibold text-white`}>Miraal Luxe</span>
      </p>

      {/* Lottie Animation Section */}
      <div className="flex flex-col items-center justify-center flex-1 gap-6">
        {/* <Player
          autoplay
          loop
          src="https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json"
          style={{ height: "300px", width: "300px" }}
        /> */}

        <div className="mb-5 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md shadow-lg cursor-default">
          <p className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
            Stay Connected
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 mb-8">
        <h2 className="text-center text-lg font-semibold mb-6 text-white">
          Connect with us
        </h2>

        <div className="space-y-4">
          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@miraal.luxe?_t=ZS-8zAWlCHARdq&_r=1"
            target="_blank"
            className="flex items-center justify-between p-4 rounded-xl bg-black border border-gray-700 hover:bg-gradient-to-r hover:from-pink-900 hover:to-purple-900 transition shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <FaTiktok size={30} className="text-white" />
              <div>
                <p className="text-white font-medium">TikTok</p>
                <p className="text-gray-400 text-sm">12.4K Followers</p>
              </div>
            </div>
            <FaExternalLinkAlt
              size={18}
              className="text-gray-400 hover:text-white transition"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/miraal_little_luxe?igsh=MXU5em9ya2E1bnliMw=="
            target="_blank"
            className="flex items-center justify-between p-4 rounded-xl bg-black border border-gray-700 hover:bg-gradient-to-r hover:from-pink-900 hover:to-purple-900 transition shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <FaInstagram size={30} className="text-pink-400" />
              <div>
                <p className="text-white font-medium">Instagram</p>
                <p className="text-gray-400 text-sm">8.6K Followers</p>
              </div>
            </div>
            <FaExternalLinkAlt
              size={18}
              className="text-gray-400 hover:text-white transition"
            />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.link/dziqoe"
            target="_blank"
            className="flex items-center justify-between p-4 rounded-xl bg-black border border-gray-700 hover:bg-gradient-to-r hover:from-green-900 hover:to-teal-900 transition shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <FaWhatsapp size={30} className="text-green-400" />
              <div>
                <p className="text-white font-medium">WhatsApp</p>
                <p className="text-gray-400 text-sm">Chat with us</p>
              </div>
            </div>
            <FaExternalLinkAlt
              size={18}
              className="text-gray-400 hover:text-white transition"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
