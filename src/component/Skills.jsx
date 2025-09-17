import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: "95%" },
  { name: "CSS", level: "90%" },
  { name: "JavaScript", level: "80%" },
  { name: "React.js", level: "90%" },
  { name: "Next.js", level: "40%" },
  { name: "Tailwind CSS", level: "95%" },
  { name: "Bootstrap", level: "95%" },
  { name: "Typescript", level: "30%" },
  { name: "Node.js (Learning)", level: "20%" },
  { name: "MongoDB (Learning)", level: "20%" },
  { name: "Express.js (Learning)", level: "20%" },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center">
        My <span className="text-purple-500">Skills</span>
      </h2>

      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-blue-800 p-5 rounded-xl shadow-md"
          >
            <h3 className="text-white font-semibold mb-2">{skill.name}</h3>
            <div className="w-full h-4 bg-gray-600 rounded-full overflow-hidden">
              <div
                className="h-4 bg-purple-500 rounded-full"
                style={{ width: skill.level }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
