import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 bg-[#0b1020] overflow-hidden"
    >

      {/* background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div className="w-full h-[1px] bg-gray-800 mb-20" />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl font-extrabold text-center mb-20"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#161b33]/80 border border-gray-800 rounded-3xl p-12 max-w-4xl mx-auto backdrop-blur-md"
        >

          <p className="text-gray-300 text-lg md:text-xl leading-10 text-center mb-14">
            Full Stack Developer passionate about building scalable, secure, and user-friendly web applications using React, Node.js, Express.js, Django, and MySQL. Experienced in developing REST APIs, implementing role-based authentication, Dockerizing applications, and building end-to-end full-stack solutions with modern development practices.
          </p>

          <div className="space-y-7">

            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-green-400 mt-1" size={22} />
              <p className="text-gray-300 text-[17px]">
                Built StockFlow, a full-stack inventory management system using React, Node.js, Express.js, MySQL, and Docker.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-green-400 mt-1" size={22} />
              <p className="text-gray-300 text-[17px]">
                Developed secure REST APIs with JWT authentication and role-based access control using Express.js and Django REST Framework.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-green-400 mt-1" size={22} />
              <p className="text-gray-300 text-[17px]">
                Containerized applications using Docker and deployed full-stack projects with cloud databases.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-green-400 mt-1" size={22} />
              <p className="text-gray-300 text-[17px]">
                Built AI-powered projects including SmartWaste and Leaf Disease Detector using Python and Django.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-green-400 mt-1" size={22} />
              <p className="text-gray-300 text-[17px]">
                Solved 210+ DSA problems on LeetCode and GeeksforGeeks using Java.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-green-400 mt-1" size={22} />
              <p className="text-gray-300 text-[17px]">
                Strong foundation in React, JavaScript, Node.js, Express.js, MySQL, Docker, Django, and REST APIs.
              </p>
            </div>

          </div>

          <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://leetcode.com/u/Pushpa21-_/"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-semibold text-lg hover:scale-105 transition duration-300 shadow-lg"
          >
            View LeetCode Profile
          </a>

          <a
            href="https://www.geeksforgeeks.org/profile/pushpa013fya?tab=activity"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-semibold transition"
            >
            View GFG Profile
          </a>
        </div>

        </motion.div>

      </div>

    </section>
  );
};

export default About;