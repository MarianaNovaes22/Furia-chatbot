import { Link } from "react-scroll";
import BackgroundLanding from "../assets/imagens/background-landing.jpg";
import LogoFuria from "../assets/imagens/furia-logo.svg";

const Landing = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${BackgroundLanding})` }}
    >
      {/* Logo */}
      <img src={LogoFuria} alt="Logo Furia" className="w-48 md:w-64" />

      {/* Botão de Scroll */}
      <Link to="chatbot" smooth={true} duration={800}>
        <button className="absolute bottom-10 text-white text-2xl animate-bounce">
          ↓
        </button>
      </Link>
    </div>
  );
};

export default Landing;
