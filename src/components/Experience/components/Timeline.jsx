import clsx from 'clsx';
import { MdCalendarMonth, MdLocationOn } from 'react-icons/md';

export default function Timeline({ timePeriod, location, title, children, isLast=false }) {
  return (
    <div className={clsx(
      "relative w-full border-l-[1px] border-solid border-l-primary pl-5",
      !isLast && "pb-8"
    )}>
      <div className="absolute left-0 top-[-1px] h-3 w-3 translate-x-[-50%] rounded-full bg-primary"/>

      <p className="flex w-full items-center gap-x-2 text-sm font-medium text-dark">
        <MdCalendarMonth size={18}/>

        {timePeriod}
      </p>
      
      <p className="mt-3 flex w-full items-center gap-x-2 text-sm font-medium text-dark">
        <MdLocationOn size={18}/>

        {location}
      </p>

      <h4 className="font-title my-2 text-lg font-semibold text-light">
        {title}
      </h4>

      {children}
    </div>
  );
}