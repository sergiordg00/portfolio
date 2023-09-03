import clsx from "clsx";

export default function TechnologyCard({ icon, name, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "flex items-center gap-x-2 rounded-lg border border-solid border-zinc-800 p-2",
        "bg-card text-[15px] font-semibold text-white duration-300",
        "hover:-translate-y-2 hover:border-primary"
      )}
    >
      {icon}
      {name}
    </a>
  );
}