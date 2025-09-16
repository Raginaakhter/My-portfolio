
import { motion } from "framer-motion";

const GradientText = ({
  children,
  colors = ["#40ffaa", "#4079ff", "#ff40aa", "#ffaa40"],
  animationSpeed = 5,
  showBorder = false,
  className = "",
}) => {
  return (
    <motion.span
      className={`inline-block font-bold text-transparent bg-clip-text ${
        showBorder ? "border-b-2 border-white/40 pb-1" : ""
      } ${className}`}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: animationSpeed,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        backgroundImage: `linear-gradient(270deg, ${colors.join(", ")})`,
        backgroundSize: "300% 300%",
      }}
    >
      {children}
    </motion.span>
  );
};

export default GradientText;
