import { GiReceiveMoney } from "react-icons/gi";
import { LuBrain } from "react-icons/lu";
import { CiViewList } from "react-icons/ci";
import { SiReaddotcv } from "react-icons/si";

export default function Projetos() {
  return (
    <>
      <section id="project" className="py-16 bg-[#F5F1EB]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Título */}
          <h2 className="text-4xl font-bold text-center mb-12 text-[#666666]">
            Nossos Projetos
          </h2>

          {/* Grid de projetos */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Projeto 5 */}
            <a
              href="https://github.com/RuiGomes111/Projecto_5_grupo17Deversidade"
              target="blank"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300 h-64 flex flex-col">
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex gap-3">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-[#222222]">
                      <GiReceiveMoney className="text-amber-500 text-4xl" />
                      Conversor de Moeda (USD → BRL)
                    </h3>
                  </div>
                  <p className="text-gray-600 text-md flex-1">
                    Um projeto Node.js que converte valores de Dólar para Real
                    utilizando a API FastForex. Desenvolvido como atividade
                    prática do Programa Desenvolve 2025.
                  </p>
                </div>
              </div>
            </a>

            {/* Projeto 6 */}
            <a href="https://mavcostta.github.io/Projeto6/" target="blank">
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300 h-64 flex flex-col">
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex gap-3">
                  <LuBrain className="text-amber-500 text-4xl" />
                  <h3 className="text-xl font-semibold mb-2 text-[#222222]">
                    Assistente de IA
                  </h3>
                </div>
                <p className="text-gray-600 text-md flex-1">
                  Este projeto abrange as Aulas 22 e 25 do projeto fullstack,
                  onde desenvolveremos um Assistente de IA Web completo usando
                  HTML, CSS e JavaScript puro (sem frameworks).
                </p>
              </div>
            </div>
            </a>
            
            {/* Projeto 7 */}
            <a
              href="https://ruigomes111.github.io/projeto7-toDoList/"
              target="blank"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300 h-64 flex flex-col">
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex gap-3">
                    <CiViewList className="text-amber-500 text-4xl" />
                    <h3 className="text-lg font-semibold mb-2 text-[#222222]">
                      To Do List em React
                    </h3>
                  </div>
                  <p className="text-gray-600 text-md flex-1">
                    Uma aplicação simples e intuitiva para gestão de tarefas,
                    permitindo adicionar, concluir e remover tarefas com
                    facilidade.
                  </p>
                </div>
              </div>
            </a>

            {/* Projeto 8 */}
            <a
              href="https://ruigomes111.github.io/Gerador-de-CV-Inteligente/"
              target="blank"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300 h-64 flex flex-col">
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex gap-3">
                    <SiReaddotcv className="text-amber-500 text-5xl" />
                    <h3 className="text-lg font-semibold mb-2 text-[#222222]">
                      Gerador de Currículo Inteligente
                    </h3>
                  </div>
                  <p className="text-gray-600 text-md flex-1">
                    Aplicação React moderna que permite criar currículos
                    profissionais com preview instantâneo e interface intuitiva.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
