import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const achievements = [
  {
    title: "AWS Cloud Practitioner Essentials",
    year: "2025",
    description:
      "Completed AWS Cloud Practitioner Essentials certification covering cloud concepts, AWS core services, security, pricing and cloud architecture fundamentals.",
  },

  {
    title: "Database Management System",
    year: "2024",
    description:
      "Learned relational database concepts, SQL queries, normalization, transactions and database design fundamentals through Infosys Springboard certification.",
  },

  {
    title: "DSA using Java",
    year: "2024",
    description:
      "Practiced data structures and algorithms using Java including arrays, linked lists, trees, recursion, sorting and problem-solving techniques.",
  },

];

const Achievements = () => {
  return (
    <section
      id="achievements"
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
          className="text-6xl font-extrabold text-center mb-20"
        >
          Achievements & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-[#161b33]/80 border border-gray-800 rounded-3xl p-10"
            >

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-2xl border border-gray-700 flex items-center justify-center">
                  <FaAward size={20} />
                </div>

                <div>

                  <h3 className="text-3xl font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mb-6 text-lg">
                    {item.year}
                  </p>

                  <p className="text-gray-300 text-lg leading-9">
                    {item.description}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Achievements;