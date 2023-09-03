import clsx from "clsx";
import { motion } from "framer-motion";

export default function NavItem({ icon, text, href, onClick, isDrawer=false, delay }) {
  return (
    <motion.li
      initial={isDrawer ? { opacity: 0, x: 10 } : { opacity: 0, y: -10 }}
      animate={isDrawer ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
      transition={{ delay: isDrawer ? delay+0.5 : delay }}
    >
      <a 
        href={href} 
        onClick={onClick}
        className={clsx(
          "font-title group relative flex items-center gap-x-2 py-1",
          "text-[15px] font-medium text-dark duration-300 hover:text-primary"
        )}
      >
        {icon}
        
        {text}

        <span className={clsx(
          "absolute bottom-0 left-0 block h-[2px] w-full origin-right scale-x-0 bg-primary",
          "transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100"
        )}/>
      </a>
    </motion.li>
  );
}