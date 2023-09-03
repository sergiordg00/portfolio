import clsx from "clsx";

export default function NavItem({ icon, text, href, onClick }) {
  return (
    <li>
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
    </li>
  );
}