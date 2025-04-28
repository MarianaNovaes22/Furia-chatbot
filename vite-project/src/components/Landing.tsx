import { Link as ScrollLink } from "react-scroll";
import BackgroundLanding from "../assets/imagens/background-landing.jpg";
import LogoFuriaLobo from "../assets/imagens/furia-logo2.svg";
import LogoFuriaTexto from "../assets/imagens/furia-logo.svg";
import { FaUser } from "react-icons/fa";
import SetaBaixo from "../assets/imagens/SetaParaBaixo.svg";

const Landing = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative flex flex-col"
      style={{ backgroundImage: `url(${BackgroundLanding})` }}
    >
      {/* Header */}
      <header className="w-full px-8 py-4 flex items-center justify-between border-b border-white/20 bg-black/30">
        {/* Logo + Nome */}
        <div className="flex items-center gap-4">
          <img src={LogoFuriaLobo} alt="Logo Furia Lobo" className="h-10" />
          <img src={LogoFuriaTexto} alt="Nome Furia" className="h-6" />
        </div>
        {/* Menu de Navegação - Usando ScrollLink em vez de <a> */}
        <nav className="flex space-x-8">
          <ScrollLink 
            to="landing" 
            smooth={true} 
            duration={800}
            className="relative group text-white font-montserrat cursor-pointer"
          >
            PÁGINA INICIAL
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </ScrollLink>
          
          <ScrollLink 
            to="chatbot" 
            smooth={true} 
            duration={800}
            className="relative group text-white font-montserrat cursor-pointer"
          >
            CHATBOT
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </ScrollLink>
          
          <ScrollLink 
            to="footer" 
            smooth={true} 
            duration={800}
            className="relative group text-white font-montserrat cursor-pointer"
          >
            SOBRE NÓS
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </ScrollLink>
        </nav>
        {/* Ícone de Usuário */}
        <div>
          <FaUser className="text-white text-2xl cursor-pointer" />
        </div>
      </header>
      {/* Conteúdo principal */}
      <div className="flex flex-col justify-center items-center text-center text-white space-y-4 flex-grow">
        <h1 className="text-4xl md:text-6xl font-bold flex items-center justify-center gap-2 flex-wrap animate-fadeInUp">
          FALE COM O CHATBOT DA
          <img src={LogoFuriaTexto} alt="Logo Furia" className="w-32 md:w-40 inline-block" />
        </h1>
        <p className="text-lg md:text-2xl animate-fadeInUp">
          Tire dúvidas, conheça curiosidades e interaja com a matilha
        </p>
        <ScrollLink to="chatbot" smooth={true} duration={800} className="cursor-pointer">
          <div className="absolute bottom-10">
            <img src={SetaBaixo} alt="Seta para baixo" className="w-8 h-8 animate-bounce" />
          </div>
        </ScrollLink>
      </div>
    </div>
  );
};

export default Landing;