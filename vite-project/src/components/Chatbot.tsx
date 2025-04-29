import BackgroundChatbot from "../assets/imagens/background-chatbot.png";
import Sidebar from "./Chatbot/Sidebar";
import ChatArea from "./Chatbot/ChatArea";

const Chatbot = () => {
  return (
    <div 
      className="h-screen w-full flex" 
      style={{ backgroundImage: `url(${BackgroundChatbot})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <Sidebar />
      <ChatArea />
    </div>
  );
};

export default Chatbot;
