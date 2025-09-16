import { motion } from "framer-motion";
import TextType from "./TextType";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 bg-gradient-to-r from-blue-900 to-indigo-900 px-6 md:px-12 lg:px-20 py-20">
      
      {/* Profile Image */}
      <motion.div
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
        className="flex-shrink-0"
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500/40 to-pink-500/40 blur-3xl rounded-full -z-10" />
        <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-2xl overflow-hidden ring-4 ring-indigo-400/70 shadow-2xl">
          <img
            src="https://i.ibb.co.com/BHk123ct/my-image.jpg"
            alt="Ragina Akter"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Text Content */}
      <div className="text-center md:text-left text-white max-w-3xl flex flex-col gap-5">
        <h2 className="text-3xl md:text-4xl font-extrabold pb-5">
          About <span className="text-purple-500">Me</span>
        </h2>

        {/* TextType Component */}
        <TextType
          text={["Hi, This is me Ragina,", "I am a quick learner", "Happy coding!"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />

        <p className="mt-4 text-gray-200 leading-relaxed text-md md:text-lg">
          I am a Frontend Web Developer with expertise in HTML, CSS, JavaScript, Tailwind CSS,
          Bootstrap, React, and Next.js, specializing in creating dynamic, responsive, and
          interactive web interfaces. I am also learning backend development with Node.js,
          Express.js, TypeScript, and MongoDB to become a full-stack developer in the future.
          I am passionate about building efficient, user-friendly web applications and
          continuously improving my skills with the latest web technologies.
        </p>
      </div>
    </section>
  );
};

export default About;
