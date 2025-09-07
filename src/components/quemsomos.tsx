import desenvolve1 from "../assets/img/desenvolve1.webp";
import desenvolve2 from "../assets/img/desenvolve2.webp";
export default function QuemSomos(){
    return(
        <>
            <section
        id="quem-somos"
        className="flex flex-col items-center justify-center p-6  rounded-lg shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full mx-auto">
          {/* Texto */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h1 className="text-4xl text-[#222222] mb-5">
              Gente que <br />
              [Desenvolve]
            </h1>
            <p className="text-justify text-[#222222]">
              Somos o grupo nº 17 DEVersidade, parte do Programa Desenvolve, uma
              iniciativa sem fins lucrativos do Grupo Boticário em parceria com
              a Koru. Fazemos parte da trilha de Desenvolvimento de Software,
              onde transformamos ideias em realidade digital por meio de linhas
              de código.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#team"
                className="rounded bg-[#002EC9] p-3 text-white hover:bg-[#001A80] transition-colors duration-300"
              >
                Nosso Team
              </a>
              <a
                href="#project"
                className="rounded bg-[#272727] p-3 text-white hover:bg-[#1d1c1c] transition-colors duration-300"
              >
                Nossos Projetos
              </a>
            </div>
          </div>

          {/* Imagens */}
          <div className="flex flex-wrap gap-4 p-4 bg-white rounded-lg shadow-md text-gray-700 justify-center">
            <div className="flex-1 min-w-[150px] max-w-[300px] h-84 overflow-hidden rounded-xl">
              <img
                src={desenvolve1}
                alt="img desenvolve 1"
                className="w-full h-full object-cover object-right"
              />
            </div>
            <div className="hidden sm:block flex-1 min-w-[150px] max-w-[300px] h-84 overflow-hidden rounded-xl ">
              <img
                src={desenvolve2}
                alt="img desenvolve 2"
                className=" w-full h-full object-cover object-right"
              />
            </div>
          </div>
        </div>
      </section>
        </>
    )
}