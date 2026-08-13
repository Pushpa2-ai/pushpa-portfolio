import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#0b1020] relative overflow-hidden flex items-center pt-32">

      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1020] via-[#121938] to-[#0b1020]" />

      {/* grid effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
              Pushpa Kumari
            </h1>

            <h2 className="text-3xl text-gray-300 font-semibold mb-8">
              Fullstack Developer | React, & Django
            </h2>

            <p className="text-gray-400 text-xl leading-10 max-w-2xl mb-8">
              Passionate about building scalable web applications,
              responsive UI designs and AI-powered solutions with
              modern frontend and backend technologies.
            </p>

            <div className="flex items-center gap-2 text-gray-400 mb-10">
              <HiOutlineLocationMarker size={22} />
              <span className="text-lg">
                Bhopal, Madhya Pradesh India
              </span>
            </div>

            {/* buttons */}
            <div className="flex flex-wrap gap-5 mb-10">

              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold text-lg"
              >
                Get In Touch
              </a>

              <a
                href="/resume.pdf"
                className="border border-gray-600 hover:border-gray-400 transition px-8 py-4 rounded-xl font-semibold text-lg"
              >
                Download Resume
              </a>

            </div>

            {/* social */}
            <div className="flex gap-5">

              <a
                href="https://github.com/Pushpa2-ai"
                className="w-14 h-14 rounded-xl border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/pushpa-kumari-803226259"
                className="w-14 h-14 rounded-xl border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="pushpakumari.cs27@gmail.com"
                className="w-14 h-14 rounded-xl border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FaEnvelope size={24} />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-3xl" />

              <div className="relative border border-gray-700 rounded-3xl overflow-hidden bg-[#161b33] w-[380px] h-[500px]">

                <img
                  src="/profile.jpeg"
                  alt="profile"
                  className="w-full h-full object-cover object-top"
                  style={{ objectPosition: "center top" }}
                />

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-white hover:text-black transition duration-300 animate-bounce"
        >
        <FaArrowDown size={18} />
      </a>

    </section>
  );
};

export default Hero;