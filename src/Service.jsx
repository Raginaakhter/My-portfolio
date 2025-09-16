import React from "react";
import { motion } from "framer-motion";

// Split heading animation
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

const SplitHeading = ({ text }) => {
  return (
    <h1 className="text-center font-bold text-2xl md:text-4xl mt-2 mb-5 text-white">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          variants={textVariant}
          viewport={{ once: true }}
          className={char === " " ? "inline-block w-2" : "inline-block"}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

const Service = () => {
  return (
    <div className="space-y-12 px-4 md:px-10 lg:px-20">
      {/* Service 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SplitHeading text="Services Overview" />

        <div className="card flex flex-col lg:flex-row bg-base-100 shadow-md rounded-xl overflow-hidden">
          <figure className="lg:w-1/2">
            <img
              className="w-full h-64 lg:h-full object-cover"
              src="https://www.shutterstock.com/image-photo/programmer-people-working-laptops-smartphones-600nw-2473384115.jpg"
              alt="Service 1"
            />
          </figure>
          <div className="card-body bg-blue-900 text-white flex-1">
            <h2 className="card-title text-lg md:text-xl">
              Frontend Web Development
            </h2>
            <p className="text-sm md:text-base">
              Building clean and modern user interfaces using HTML, CSS,
              JavaScript, Tailwind CSS, and Bootstrap. Developing responsive
              designs that work seamlessly across all devices.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Service 2 */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SplitHeading text="UI/UX & Animations" />

        <div className="card flex flex-col lg:flex-row bg-base-100 shadow-md rounded-xl overflow-hidden">
          <figure className="lg:w-1/2">
            <img
              className="w-full h-64 lg:h-full object-cover"
              src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg"
              alt="Service 2"
            />
          </figure>
          <div className="card-body bg-blue-900 text-white flex-1">
            <h2 className="card-title text-lg md:text-xl">
              Smooth Animations & UX Design
            </h2>
            <p className="text-sm md:text-base">
              Implementing animations with Framer Motion and CSS transitions.
              Designing intuitive layouts that enhance user experience.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Service 3 */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SplitHeading text="React & Next.js Development" />

        <div className="card flex flex-col lg:flex-row bg-base-100 shadow-md rounded-xl overflow-hidden">
          <figure className="lg:w-1/2">
            <img
              className="w-full h-64 lg:h-full object-cover"
              src="https://www.mooc.org/hubfs/applications-of-computer-programming.jpg"
              alt="Service 3"
            />
          </figure>
          <div className="card-body bg-blue-900 text-white flex-1">
            <h2 className="card-title text-lg md:text-xl">
              Scalable React & Next.js Apps
            </h2>
            <p className="text-sm md:text-base">
              Building component-based apps with React. Server-side rendering
              and SEO optimization using Next.js for modern web development.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
