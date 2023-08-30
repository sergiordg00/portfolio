export default function Section({ id, icon, title, children }) {
  return (
    <section id={id} className="w-full pt-24">
      <h2 className="font-title flex w-full items-center gap-x-3 text-2xl font-semibold text-light">
        <span className="shrink-0 text-primary">
          {icon}
        </span>

        {title}

        <div className="ml-3 hidden h-[1px] w-[300px] bg-gray-700 sm:block"/>
      </h2>

      {children}
    </section>
  );
}