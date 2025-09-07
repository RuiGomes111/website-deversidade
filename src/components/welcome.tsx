import Imagemdev from "../assets/img/diversidade.jpg";
import QuemSomos from "./quemsomos";
import Equipa from "./equipa";
import Projetos from "./projetos";
import Footer from "./footer";
export default function WelcomePage() {
  return (
    <>
      <div className="min-h-screen bg-[#DED6FB] flex flex-col items-center justify-center p-6 ">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#222222]  p-4 rounded-lg ">
            DEVersidade!
          </h1>
          <p className="text-lg mt-4 text-[#8C7280]">
            Uma jornada única de inovação e diversidade no mundo da tecnologia.
          </p>
        </header>
        <main className="flex flex-col text-center max-w-4xl w-full">
          <section className="flex gap-6 mb-8 items-center justify-center">
            <a
              className="rounded-3xl bg-gradient-to-tl from-[#002EC9] via-[#18A38D] p-3 text-white transition-transform duration-300 hover:scale-110"
              href="#quem-somos"
            >
              Saiba Sobre Nós
            </a>
            <a className="rounded-3xl bg-white p-3 hover:bg-[#002EC9]" href="#project">
              Nossos Projectos
            </a>
          </section>
          <section className="w-full mb-9">
            <img
              src={Imagemdev}
              alt="imagem deversidade"
              className="w-full max-w-4xl rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 object-cover"
            />
          </section>
        </main>
      </div>

      <QuemSomos />
      <Equipa />
      <Projetos/>
      <Footer/>

      
    </>
  );
}
