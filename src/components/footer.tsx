import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sobre */}
        <div>
          <h3 className="text-xl font-bold mb-4">DEVersidade</h3>
          <p className="text-gray-400 text-sm">
            Transformando ideias em soluções digitais. Somos um grupo apaixonado por inovação e tecnologia.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="#quem-somos" className="hover:text-[#18A38D] transition-colors">Quem Somos</a></li>
            <li><a href="#project" className="hover:text-[#18A38D] transition-colors">Projetos</a></li>
            <li><a href="#contact" className="hover:text-[#18A38D] transition-colors">Contato</a></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contato</h3>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/ruigomes-dev/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="hover:text-[#18A38D] transition-colors" />
            </a>
            <a href="https://github.com/RuiGomes111" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="hover:text-[#18A38D] transition-colors" />
            </a>
            <a href="mailto:ruisoft01@gmail.com">
              <FaEnvelope size={24} className="hover:text-[#18A38D] transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} DEVersidade. Todos os direitos reservados.
      </div>
    </footer>
  );
}
