import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-32 bg-[#0b1020] overflow-hidden"
    >

      {/* grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="w-full h-[1px] bg-gray-800 mb-20" />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold text-center mb-8"
        >
          Get In Touch
        </motion.h2>

        <p className="text-center text-gray-400 text-xl mb-20">
          I’m open to opportunities and collaborations. Let’s talk.
        </p>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">

          {/* EMAIL */}
          <div className="bg-[#161b33]/80 border border-gray-800 rounded-3xl p-10 text-center">

            <div className="flex justify-center mb-6">
              <FaEnvelope size={32} />
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Email
            </h3>

            <p className="text-gray-400 text-lg break-all">
              pushpakumari.cs27@gmail.com
            </p>

          </div>

          {/* PHONE */}
          <div className="bg-[#161b33]/80 border border-gray-800 rounded-3xl p-10 text-center">

            <div className="flex justify-center mb-6">
              <FaPhoneAlt size={28} />
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Phone
            </h3>

            <p className="text-gray-400 text-lg">
              +91 7667616772
            </p>

          </div>

          {/* LOCATION */}
          <div className="bg-[#161b33]/80 border border-gray-800 rounded-3xl p-10 text-center">

            <div className="flex justify-center mb-6">
              <FaMapMarkerAlt size={30} />
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Location
            </h3>

            <p className="text-gray-400 text-lg">
              Bhopal, Madhya Pradesh India
            </p>

          </div>

        </div>

        {/* buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">

          <a
            href="mailto:pushpa01082020@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 transition px-10 py-5 rounded-2xl text-xl font-semibold"
          >
            Send Email
          </a>

          <button
            className="bg-[#20263f] hover:bg-[#2c3557] transition px-10 py-5 rounded-2xl text-xl font-semibold"
          >
            Copy Email
          </button>

        </div>

        {/* footer */}
        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-500 text-lg">
            © 2026 Pushpa Kumari. All rights reserved.
          </p>

          <div className="flex gap-5">

            <a
              href="https://github.com/Pushpa2-ai "
              className="w-14 h-14 rounded-2xl border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/pushpa-kumari-803226259"
              className="w-14 h-14 rounded-2xl border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="pushpa01082020@gmail.com"
              className="w-14 h-14 rounded-2xl border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              <FaEnvelope size={24} />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;