import clsx from "clsx";

export default function NavButton({ icon, href }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
        "border border-solid border-zinc-700 bg-background text-white duration-300",
        "hover:-translate-y-2 hover:border-primary hover:text-primary"
      )}
    >
      {icon}
    </a>
  );
}