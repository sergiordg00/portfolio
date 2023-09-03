import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const cursorBackgroundRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      cursorBackgroundRef.current.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.1), transparent 80%)`;
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 h-screen w-full" ref={cursorBackgroundRef}/>
  );
}