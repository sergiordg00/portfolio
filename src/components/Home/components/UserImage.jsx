import sergio from "@/assets/img/sergio.jpeg";

export default function UserImage() {
  return (
    <div className="relative order-1  mr-3 h-44 w-44 shrink-0 sm:mr-5 sm:h-64 sm:w-64 min-[710px]:order-2 lg:h-80 lg:w-80">
      <img 
        src={sergio}
        alt="Sergio's profile" 
        className="relative z-[2] h-full w-full rounded-lg bg-gray-600 object-cover object-center"
      />

      <div className="absolute left-3 top-3 h-full w-full rounded-lg border border-solid border-primary sm:left-5 sm:top-5"/>
    </div>
  );
}