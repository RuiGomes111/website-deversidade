import Rui_Gomes from "../assets/img/Rui_Gomes.webp"
import Lorena from "../assets/img/lorena.webp"
import Maira from "../assets/img/maira.webp"
import Mavi from "../assets/img/mavi.webp"
import Manu from "../assets/img/manu.webp"
import Gustavo from "../assets/img/gustavo.webp"
import { useRef, useEffect } from "react";

export default function Equipa(){
     const carouselRef = useRef(null);

  // Rolar automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

        // Se chegou no final, volta para o início
        if (scrollLeft + clientWidth >= scrollWidth) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({ left: clientWidth / 2, behavior: "smooth" });
        }
      }
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      carouselRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };
    return(
        <>
        
{/* Carrossel automático */}
      <section id="team" className="relative py-10  bg-gray-100 gap-6 max-w-6xl w-full mx-auto ">
        {/* Botão de rolagem esquerda */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded"
        >
          ◀
        </button>

        {/* Container do carrossel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-smooth gap-4 px-6 "
        >
          <div className="flex-shrink-0 flex-col w-100 h-84 bg-[#222222] text-white flex items-center justify-center rounded-lg">
            {/*imagem de Victória Costa*/}
            <a href="https://www.linkedin.com/in/mavcostta/" target="blank">
            <img className="rounded-2xl w-64 max-h-64 mb-3" src={Mavi} alt="imagem de Rui Gomes"/>
            </a>
            <p className="text-[#D4AA7D]">Vitória Costa</p>
          </div>
          {/*imagem de Manu*/}
          <div className="flex-shrink-0 w-100 h-84 bg-[#222222] text-white flex flex-col items-center justify-center rounded-lg">
            <a href="https://github.com/manu-melo" target="blank">
            <img className="rounded-2xl w-64 max-h-64 filter mb-3" src={Manu} alt="imagem de Rui Gomes"/>
            </a>
            <p className="text-[#D4AA7D]">Manu</p>
          </div>
          {/*imagem de lorena*/}
          <div className="flex-shrink-0 w-100 h-84 bg-[#222222] text-white flex flex-col items-center justify-center rounded-lg">
            <a href="https://www.linkedin.com/in/lsg-gurgel2025/" target="blank">
            <img className="rounded-2xl w-64 max-h-64 mb-3" src={Lorena} alt="imagem de LSG-gurgel"/>
            </a>
            <p className="text-[#D4AA7D]">LSG-gurgel</p>
          </div>
          {/*imagem de Rui*/}
          <div className="flex-shrink-0 w-100 h-84 bg-[#222222] text-white flex flex-col items-center justify-center rounded-lg">
            <a href="https://www.linkedin.com/in/ruigomes-dev/" target="blank">
            <img className="rounded-2xl w-64 max-h-64 filter grayscale mb-3" src={Rui_Gomes} alt="imagem de Rui Gomes"/>
            </a>
            <p className="text-[#D4AA7D]">Rui Gomes</p>
          </div>
          {/*imagem de Maíra*/}
          <div className="flex-shrink-0 w-100 h-84 bg-[#222222] text-white flex flex-col items-center justify-center rounded-lg text-center">
            <a href="https://github.com/maikaminski" target="blank">
            <img className="rounded-2xl w-64 max-h-64 mb-3" src={Maira} alt="imagem de Maíra"/>
            <p className="text-[#D4AA7D]">Maíra Kaminski</p>
            </a>
          </div>
          {/*imagem de Gustavo*/}
          <div className="flex-shrink-0 w-100 h-84 bg-[#222222] text-white flex flex-col items-center justify-center rounded-lg text-center">
            <a href="https://github.com/gustadevcode" target="blank">
            <img className="rounded-2xl w-64 max-h-64 mb-3" src={Gustavo} alt="imagem de Gustavo"/>
            <p className="text-[#D4AA7D]">Gustavo Valladares</p>
            </a>
          </div>
        </div>

        {/* Botão de rolagem direita */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded"
        >
          ▶
        </button>
      </section>
        </>
    )
}
