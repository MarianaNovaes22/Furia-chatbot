import { useState } from "react";
import BackgroundChatbot from "../assets/imagens/background-chatbot.png";
import Sidebar from "./Chatbot/Sidebar";
import ChatArea from "./Chatbot/ChatArea";
import { Menu } from "lucide-react"; 

const Chatbot = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="h-screen w-full flex relative"
      style={{
        backgroundImage: `url(${BackgroundChatbot})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Botão hambúrguer - aparece apenas em telas pequenas */}
      <button
        className="absolute top-4 left-4 z-50 p-2 bg-black/50 text-white rounded lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu />
      </button>

      {/* Sidebar - oculta no mobile, visível no desktop ou quando aberta */}
      <div
        className={`
          fixed top-0 left-0 h-full z-40 transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0
        `}
      >
        <Sidebar closeSidebar={() => setSidebarOpen(false)} />
      </div>

      <div className="flex-1">
        <ChatArea />
      </div>
    </div>
  );
};

export default Chatbot;
