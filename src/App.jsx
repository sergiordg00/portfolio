import CursorEffect from "./components/common/CursorEffect";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="w-full">
      <CursorEffect/>
      
      <Navbar/>
      
      <main className="mx-auto w-full max-w-[1140px] px-5 pb-10">
        <Home/>

        <Experience/>

        <Projects/>

        <Skills/>
      </main>
    </div>
  );
}