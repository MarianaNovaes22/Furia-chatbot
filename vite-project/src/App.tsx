import React from "react";
import { Link, Element } from "react-scroll";
import Landing from "./components/Landing";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="flex flex-col">
      <Element name="landing" className="h-screen flex justify-center items-center bg-blue-500 relative">
        <Landing />
        
        <Link to="chatbot" smooth={true} duration={800}>
          <button className="absolute bottom-10 text-white">↓ Scroll para o Chatbot</button>
        </Link>
      </Element>
      
      <Element name="chatbot" className="h-screen flex justify-center items-center bg-gray-800 relative">
        <Chatbot />
        <Link to="footer" smooth={true} duration={800}>
          <button className="absolute bottom-10 text-white">↓ Scroll para o Footer</button>
        </Link>
      </Element>
      
      <Element name="footer" className="h-screen flex justify-center items-center bg-black text-white">
        <Footer />
      </Element>
    </div>
  );
};

export default App;