import react from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function About() {
  // Data for amenities/services
  // const amenities = [
  //   {
  //     icon: "icons/services/image-1-1.svg",
  //     title: "Churrasqueira",
  //     description:
  //       "Churrasqueira de tijolos grande, com duas laterais bancadas de granito.",
  //     iconWrapperClass: "relative w-12 h-12",
  //     iconClass: "relative w-12 h-12",
  //   },
  //   {
  //     icon: "icons/services/image-1-2.svg",
  //     title: "Piscina",
  //     description:
  //       "Nosa piscina tem conta com 3 metros de largura x 7 de comprimento e 1,20 de profundidade.",
  //     iconWrapperClass: "relative w-12 h-12",
  //     iconClass: "relative w-12 h-12",
  //   },
  //   {
  //     icon: "icons/services/image-1-3.svg",
  //     title: "Área externa",
  //     description:
  //       "Nossa área externa tem 200m² com espaço para colocar pula-pula, touro mecânico, futebol de sabão, tobogã inflável e outros brinquedos, 10 mesas e 40 cadeiras. Além de tenda para tempo chuvoso e 3 banheiros (masculino, feminino, e cadeirantes).",
  //     iconWrapperClass: "relative w-12 h-12",
  //     iconClass: "relative w-12 h-12",
  //   },
  //   {
  //     icon: "icons/services/image-1-4.svg",
  //     title: "Área interna",
  //     description:
  //       "Contamos com mais de 100m², jogo de iluminação a laser, mesa e caixas de som, 14 mesas de vidro e 80 cadeiras de luxo acolchoadas, ambiente climatizado , cozinha e banheiro masculino e feminino.",
  //     iconWrapperClass: "relative w-12 h-12",
  //     iconClass: "relative w-12 h-12",
  //   },
  // ];

  // // Data for rules/notices
  // const rules = [
  //   {
  //     icon: "icons/no-accepts/block.svg",
  //     description: "O consumo de bebidas alcoólicas é proibido",
  //     iconClass: "relative w-[25.6px] h-[25.6px]",
  //   },
  //   {
  //     icon: "icons/no-accepts/warning.svg",
  //     description: "Não oferecemos serviços, somente o aluguel do espaço",
  //     iconClass:
  //       "relative w-7 h-7 -top-px -left-px bg-[url(/vector-11.svg)] bg-[100%_100%]",
  //   },
  //   {
  //     icon: "icons/no-accepts/hour.svg",
  //     description: "O período de aluguel são de 5 horas.",
  //     iconClass:
  //       "relative w-[28.8px] h-[28.8px] mt-[-3.20px] mb-[-3.20px] ml-[-3.20px] mr-[-3.20px]",
  //   },
  // ];

  const settings = {
    dots: true, // Exibir pontos indicadores
    infinite: true, // Carrossel infinito
    speed: 500, // Velocidade da animação (ms)
    slidesToShow: 1, // Número de divs visíveis de uma vez
    slidesToScroll: 1, // Número de divs a serem roladas
    initialSlide: 0, // Slide inicial
    autoplay: true, // Avançar automaticamente
    autoplaySpeed: 3500, // Intervalo entre avanços automáticos (ms)
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="OurSpace" className="py-24 ">
      {/*  2xl:max-w-[1440px] xl:max-w-[1280px] flex flex-col w-full items-center gap-4 md:gap-2 pt-8 md:pt-16 pb-16 md:pb-32 px-4 relative  */}
      <div className="2xl:max-w-[1440px] xl:max-w-[1280px] mx-auto px-4 flex gap-8 items-center justify-bottom flex-col xl:flex-row">
        <div className="w-full xl:w-1/2  flex flex-col gap-8">
          <h1 className="font-bold text-dark-green lg:text-5xl  text-4xl ">
            Quem nós atendemos ?
          </h1>
          <div className="flex flex-col gap-4 pb-8">
            <div className="flex items-center gap-4 border-b-[1px] py-4 border-gray-300 ">
              <img src="icons/about/houses.svg" alt="" />
              <div>
                <h4 className="font-semibold text-black text-lg">Condomínios</h4>
                <p className="text-sm font-normal">
Transformamos seu quintal, jardim ou varanda em um refúgio verde e agradável. Seja para valorizar sua casa ou trazer mais bem-estar à rotina, cuidamos de cada detalhe com carinho e profissionalismo.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b-[1px] py-4 border-gray-300">
              <img src="icons/about/enterprise.svg" alt="" />
              <div>
                <h4 className="font-semibold text-black text-lg">Empresas</h4>
                <p className="text-sm font-normal">
Oferecemos soluções completas de jardinagem e paisagismo para áreas comuns, garantindo beleza, segurança e valorização dos espaços compartilhados. Manutenções periódicas e atendimento personalizado para síndicos e administradoras.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b-[1px] py-4 border-gray-300">
              <img src="icons/about/house.svg" alt="" />
              <div>
                <h4 className="font-semibold text-black text-lg">Residências</h4>
                <p className="text-sm font-normal">
Criamos e mantemos ambientes verdes que impressionam clientes, colaboradores e visitantes. Jardins bem cuidados transmitem profissionalismo, acolhimento e fortalecem a imagem da sua marca.
                </p>
              </div>
            </div>
            {/* <div className="flex items-center gap-4 py-4">
              <img src="icons/about/university.svg" alt="" />
              <div>
                <h4 className="font-semibold text-black text-lg">Universidades</h4>
                <p className="text-sm font-normal">
                  Atendemos festas de aniversário, casamentos, formaturas,
                  festas de 15 anos, eventos corporativos, confraternizações e
                  muito mais. Nosso espaço é versátil e pode ser adaptado para
                  atender às suas necessidades específicas.
                </p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="w-11/12 xl:w-1/2 flex flex-col items-center gap-2">
          <Slider className="w-[95%] text-center " {...settings}>
            <div className="">
              <img
                className="w-full h-full object-cover"
                src={"images/services/image-1.png"}
                alt="alo"
              />
            </div>
            <div className="">
              <img
                className="w-full h-full object-cover"
                src={"images/services/image-2.png"}
                alt="alo"
              />
            </div>
            <div className="">
              <img
                className="w-full h-full object-cover"
                src={"images/services/image-3.png"}
                alt="alo"
              />
            </div>
            <div className="">
              <img
                className="w-full h-full object-cover"
                src={"images/services/image-4.png"}
                alt="alo"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
