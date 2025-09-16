
import React from "react";
import GradientText from "./GradientText";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "Diploma in Computer Science & Technology",
      institute: "Rangpur Polytechnic Institute",
      result: "CGPA: 3.69 / 4",
      year: "2021 - Present",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institute: "Dhaka Board",
      result: "GPA: 4.78 / 5",
      year: "2021",
    },
    {
      degree: "Professional Certifications",
      institute: "Inspired IT, Rangpur & Future IT Institute",
      result: "Web Development (Completed), Digital Marketing (Ongoing)",
      year: "2023 - 2025",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 px-6 md:px-12 lg:px-20 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="text-3xl md:text-4xl font-extrabold"
        >
          My Education
        </GradientText>
      </div>

      {/* Education Cards */}
      <div className="grid gap-8 md:grid-cols-2">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-md p-6 text-white hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl md:text-2xl font-bold text-fuchsia-400">
              {edu.degree}
            </h3>
            <p className="mt-2 text-gray-200 font-medium">{edu.institute}</p>
            <p className="mt-1 text-sm text-gray-300">{edu.year}</p>
            <p className="mt-3 text-md">{edu.result}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
