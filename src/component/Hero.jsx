
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import About from "./About";
import Service from "../Service";
import Education from "./Education";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";

const Hero = () => {
    // Word by word animation
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.25 },
        },
    };

    const word = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const name = "Ragina Akter".split(" "); // word by word animate

    return (
        <div>
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background with overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1600&auto=format&fit=crop')`,
                    }}
                />
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-1 md:gap-20">

                    {/* Text Side (Left) */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="text-white text-center md:text-left flex-1"
                    >
                        <motion.h2
                            variants={word}
                            className="text-sm md:text-base uppercase tracking-[4px] text-gray-300 font-bold"
                        >
                            Hi, it's me
                        </motion.h2>

                        {/* Name word by word */}
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-6xl font-extrabold mt-2 flex flex-wrap justify-center md:justify-start gap-3 leading-tight"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            {name.map((wordItem, i) => (
                                <motion.span
                                    key={i}
                                    variants={word}
                                    className="bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
                                >
                                    {wordItem}
                                </motion.span>
                            ))}
                        </motion.h1>

                        <motion.p
                            variants={word}
                            className="mt-4 text-gray-200 max-w-xl mx-auto md:mx-0 leading-relaxed font-bold"
                        >
                            And I am a <span className=" text-xl text-fuchsia-400 font-bold">Frontend Developer</span>{" "}
                            specializing in{" "}
                            <span className="font-semibold">I am a skilled web developer proficient in  Next.js, React.js,  JavaScript, CSS, Tailwind CSS, Bootstrap, and HTML. I have experience in every stage of web development and love creating user-friendly web
                                applications. Additionally, I can build dynamic Frontend websites.</span>,{" "}
                            <span className="font-semibold">Tailwind</span>, and{" "}
                            <span className="font-semibold">smooth UI animations</span>.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            variants={word}
                            className="mt-8 flex flex-col sm:flex-row sm:justify-start justify-center gap-4"
                        >
                            <a
                                href="Ragina Frotend-developer.pdf"
                                download="Ragina_Frontend_Developer_CV.pdf"
                                className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-fuchsia-500 transition shadow-md text-white font-medium"
                            >
                                Download CV
                            </a>

                            <a
                                href="/contact"
                                className="px-6 py-3 rounded-lg border border-gray-400 hover:bg-white/10 transition text-gray-100 font-medium"
                            >
                                Contact Me
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image (Right) */}
                    <motion.div
                        initial={{ y: -120, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 60, damping: 15 }}
                        className="relative flex-shrink-0"
                    >
                        {/* Soft glow behind image */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500/40 to-pink-500/40 blur-3xl rounded-full -z-10" />

                        <div className="w-40 h-40 sm:w-52  sm:h-52 md:w-72 md:h-72 rounded-2xl overflow-hidden ring-4 ring-indigo-400/70 shadow-2xl">
                            <img
                                src="https://i.ibb.co.com/27Nmcry5/my-image.jpg"
                                alt="Ragina Akter"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
            <About></About>
            <Service></Service>
            <Education></Education>
            <Skills></Skills>
            <Resume></Resume>
            <Contact></Contact>
        </div>
    );
};

export default Hero;
