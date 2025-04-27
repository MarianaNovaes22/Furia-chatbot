import { useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Landing from "./components/Landing";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        scroll.scrollTo(document.getElementById("chatbot")!.offsetTop, {
          duration: 800,
          smooth: true,
        });
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      <section id="landing" className="h-screen flex justify-center items-center bg-blue-500">
        <Landing />
        <Link to="chatbot" smooth={true} duration={800}>
          <button className="absolute bottom-10 text-white">↓ Scroll para o Chatbot</button>
        </Link>
      </section>

      <section id="chatbot" className="h-screen flex justify-center items-center bg-gray-800">
        <Chatbot />
      </section>

      <section id="footer" className="h-screen flex justify-center items-center bg-black text-white">
        <Footer />
      </section>
    </div>
  );
};

export default App;