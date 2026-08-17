import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 bg-[#0b1020] overflow-hidden"
    >

      {/* grid background */}
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
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* FRONTEND */}
          <div className="bg-[#161b33]/80 border border-gray-800 rounded-3xl p-8">

            <h3 className="text-3xl font-bold mb-8">
              Frontend
            </h3>

            <div className="flex flex-wrap gap-4">

              <Skill name="React.js" />
              <Skill name="JavaScript" />
              <Skill name="HTML" />
              <Skill name="CSS" />
              <Skill name="Tailwind CSS" />
              <Skill name="Responsive Design" />

            </div>

          </div>

          {/* BACKEND */}
          <div className="bg-[#161b33]/80 border border-gray-800 rounded-3xl p-8">

            <h3 className="text-3xl font-bold mb-8">
              Backend
            </h3>

            <div className="flex flex-wrap gap-4">

              <Skill name="Django" />
              <Skill name="Django REST" />
              <Skill name="FastAPI" />
              <Skill name="REST APIs" />
              <Skill name="Python" />
              <Skill name="JWTAuthentication" />
              <Skill name="RBAC" />
              <Skill name="RESTful APIs" />
              <Skill name="Google Gemini API" />
              <Skill name="Google GenAI SDK" />

            </div>

          </div>

          {/* AI/ML */}
          <div className="bg-[#161b33]/80 border border-gray-800 rounded-3xl p-8">

            <h3 className="text-3xl font-bold mb-8">
              AI / ML
            </h3>

            <div className="flex flex-wrap gap-4">

              <Skill name="Scikit-learn" />
              <Skill name="OpenCV" />
              <Skill name="NumPy" />
              <Skill name="Classical Machine Learning" />
              <Skill name="SVM" />
              <Skill name="Image Processing" />
              <Skill name="Feature Extraction" />

            </div>

          </div>

          {/* DATABASE */}
          <div className="bg-[#161b33]/80 border border-gray-800 rounded-3xl p-8">

            <h3 className="text-3xl font-bold mb-8">
              Database
            </h3>

            <div className="flex flex-wrap gap-4">

              <Skill name="MySQL" />
              <Skill name="PostgreSQL" />

            </div>

          </div>

          {/* TOOLS */}
          <div className="bg-[#161b33]/80 border border-gray-800 rounded-3xl p-8">

            <h3 className="text-3xl font-bold mb-8">
              Tools & Others
            </h3>

            <div className="flex flex-wrap gap-4">

              <Skill name="Git" />
              <Skill name="GitHub" />
              <Skill name="Redis" />
              <Skill name="Celery" />
              <Skill name="Docker" />
              <Skill name="Postman" />
              <Skill name="VS Code" />
              <Skill name="Vercel" />
              <Skill name="Render" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

const Skill = ({ name }) => {
  return (
    <div className="px-5 py-3 border border-gray-700 rounded-xl bg-[#20263f] text-gray-300 text-lg hover:border-blue-500 transition">
      {name}
    </div>
  );
};

export default Skills;