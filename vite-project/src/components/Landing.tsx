import { Link } from "react-scroll";
import BackgroundLanding from "../assets/imagens/background-landing.jpg";
import LogoFuriaLobo from "../assets/imagens/furia-logo2.svg"; 
import LogoFuriaTexto from "../assets/imagens/furia-logo.svg"; 

import { FaUser } from "react-icons/fa";

const Landing = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative flex flex-col"
      style={{ backgroundImage: `url(${BackgroundLanding})` }}
    >
      {/* Header */}
      <header className="w-full px-8 py-4 flex items-center justify-between">
        {/* Logo + Nome */}
        <div className="flex items-center gap-4">
          <img src={LogoFuriaLobo} alt="Logo Furia Lobo" className="h-10" />
          <img src={LogoFuriaTexto} alt="Nome Furia" className="h-6" />
        </div>

        {/* Ícone de Usuário */}
        <div>
          <FaUser className="text-white text-2xl cursor-pointer" />
        </div>
      </header>

      {/* Conteúdo principal (logo e botão) */}
      <div className="flex-grow flex flex-col justify-center items-center">
        <img src={LogoFuriaTexto} alt="Logo Furia" className="w-48 md:w-64" />
        <Link to="chatbot" smooth={true} duration={800}>
          <button className="absolute bottom-10 text-white text-2xl animate-bounce">
            ↓
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
