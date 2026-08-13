import { motion } from "framer-motion";

const projects = [
  {
    title: "WorkFlow",
    image: "/workflow.jpeg",
    description:
      "A full-stack project management platform for managing projects, tasks, team workflows, and user access through a centralized dashboard.",


    tech: ["React", "Django REST Framwork", "PostgreSQL", "Redis", "Celery", "Docker"],

    github: "https://github.com/Pushpa2-ai/workflow",

    demo: "https://workflow-amber-three.vercel.app/",
  },

  {
    title: "Leaf Disease Detector",
    image: "/plant.png",
    description:
      "Machine learning based plant leaf disease detection system with severity analysis, prevention suggestions and responsive dashboard UI.",

    tech: ["React", "Django", "Tailwind", "ML", "API"],

    github: "https://github.com/Pushpa2-ai/leaf-disease-detector",

    demo: "https://leaf-disease-detector-three.vercel.app/",
  },

  {
    title: "SmartWaste",
    image: "/smartwaste.png",
    description:
      "AI-powered waste management and garbage tracking system with smart monitoring features, responsive UI and scalable backend integration.",

    tech: ["React", "Django", "Tailwind", "REST API", "AI"],

    github: "https://github.com/Pushpa2-ai/smart-waste-tracker",

    demo: "https://smart-waste-tracker-vercel.vercel.app/",
  },
  {
    title: "Chatbot",
    image: "/chatbot.jpeg",
    description:
      "Developed an AI-powered chatbot using Python and Google Gemini API with a RESTful backend, featuring Dark Mode, ChatGPT-style UI, chat export, and response management.",

    tech: ["Python", "Google Gemini 2.5 Flash", "Google GenAI SDK", "REST API", "HTML5", "CSS3", "JavaScript"],

    github: "https://github.com/Pushpa2-ai/gemini-chatbot",

    demo: "https://gemini-chatbot-8jjz.onrender.com",
  },

  {
    title: "Personal Dashboard",
    image: "/dashboard.png",
    description:
      "Modern productivity dashboard featuring weather widgets, notes management and responsive UI components for daily task organization.",

    tech: ["React", "Tailwind", "DjangoREST", "API", "Dashboard"],

    github: "https://github.com/Pushpa2-ai/personal-dashboard",

    demo: "https://personal-dashboard-six-delta.vercel.app/dashboard",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
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
          Featured Projects
        </motion.h2>

        <p className="text-center text-gray-400 text-xl mb-20">
          A selection of projects demonstrating full-stack and AI-powered development experience.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-[#161b33]/90 border border-gray-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[260px] object-cover"
              />

              <div className="p-7">

                <h3 className="text-3xl font-bold mb-5">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-9 text-lg mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">

                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-[#20263f] border border-gray-700 rounded-xl text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="flex gap-4">

                <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 border border-gray-700 hover:border-gray-500 transition rounded-xl py-4 text-center font-semibold"
                >
                    Code
                </a>

                <a
                    href={project.demo}
                    target="_blank"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 transition rounded-xl py-4 text-center font-semibold"
                >
                    Demo
                </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;