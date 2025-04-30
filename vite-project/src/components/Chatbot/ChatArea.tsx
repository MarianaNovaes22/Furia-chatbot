import { useState } from "react";
import WelcomeScreen from "./WelcomeScreen";
import ConversationScreen from "./ConversationScreen";

const ChatArea = () => {
  const [hasStartedChat, setHasStartedChat] = useState(false);

  return (
    <div className="flex-1 bg-black/50 h-full">
      {hasStartedChat ? (
        <ConversationScreen />
      ) : (
        <WelcomeScreen onStartChat={() => setHasStartedChat(true)} />
      )}
      
    </div>
    
  );
};

export default ChatArea;
