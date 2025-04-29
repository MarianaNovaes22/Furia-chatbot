import { useState, useRef } from "react";

const ConversationScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset altura
      textarea.style.height = Math.min(textarea.scrollHeight, 200) + "px"; // Limita altura máxima
    }
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      // Aqui você pode disparar o envio da mensagem
      console.log("Mensagem enviada:", inputValue);
      setInputValue(""); // limpa o campo
      
      // Resetar altura após enviar
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = "auto";
      }
    }
  };

  return (
    <div className="flex flex-col justify-between h-full p-4">
      {/* Área de mensagens */}
      <div className="flex flex-col gap-4 overflow-y-auto h-full px-4 pt-20 lg:pt-4 text-white">
        <div className="bg-white/10 p-2 rounded w-max">Olá! Como posso ajudar?</div>
      </div>

      {/* Caixa de mensagem com auto-resize */}
      <div className="flex mt-4 w-full max-w-md px-4 gap-2 self-center">
        <textarea
          ref={textareaRef}
          placeholder="Pergunte alguma coisa"
          value={inputValue}
          onChange={handleInputChange}
          rows={1}
          className="flex-1 resize-none px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 shadow-md overflow-hidden leading-5 max-h-52"
        />
        <button
          onClick={handleSubmit}
          className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-full shadow-md text-white"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default ConversationScreen;