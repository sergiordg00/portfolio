import { motion } from "framer-motion";

import sergio from "@/assets/img/sergio.jpeg";
import useScreenSize from "@/hooks/useScreenSize";

export default function UserImage() {
  const screenSize = useScreenSize();

  return (
    <motion.div 
      className="relative order-1  mr-3 h-44 w-44 shrink-0 sm:mr-5 sm:h-64 sm:w-64 min-[710px]:order-2 lg:h-80 lg:w-80"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: screenSize.width < 710 ? 0.4 : 0.8, duration: 0.5 }}
    >
      <img 
        src={sergio}
        alt="Sergio's profile" 
        className="relative z-[2] h-full w-full rounded-lg bg-gray-600 object-cover object-center"
      />

      <div className="absolute left-3 top-3 h-full w-full rounded-lg border border-solid border-primary sm:left-5 sm:top-5"/>
    </motion.div>
  );
}