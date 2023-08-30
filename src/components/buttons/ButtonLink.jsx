import clsx from "clsx";

export default function ButtonLink({ icon, text, ...props }) {
  return (
    <a 
      target="_blank"
      rel="noopener noreferrer"
      {...props} 
      className={clsx(
        "font-title flex w-fit shrink-0 items-center gap-x-2 rounded-md",
        "bg-primary px-4 py-[10px] text-[15px] font-semibold transition hover:opacity-50"
      )}
    >
      {icon}
      {text}
    </a>
  );
}