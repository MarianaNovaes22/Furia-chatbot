import { useState } from "react";

const ConversationScreen = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim()) {
      // Aqui você pode disparar o envio da mensagem
      console.log("Mensagem enviada:", inputValue);
      setInputValue(""); // limpa o campo
    }
  };

  return (
    <div className="flex flex-col justify-between h-full p-4">
      {/* Área de mensagens */}
      <div className="flex-1 overflow-y-auto space-y-4 text-white">
        <div className="bg-white/10 p-2 rounded w-max">Olá! Como posso ajudar?</div>
      </div>

      {/* Novo input estilizado igual à tela de welcome */}
      <div className="flex mt-4 w-full max-w-md px-4 gap-2 self-center">
        <input
          type="text"
          placeholder="Pergunte alguma coisa"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 shadow-md"
        />
        <button
          onClick={handleSubmit}
          className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-full shadow-md"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default ConversationScreen;
