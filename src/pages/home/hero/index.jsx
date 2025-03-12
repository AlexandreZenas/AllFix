import { useEffect, useState } from "react";
import { MainButton } from "../../../components/buttons/main-button";

export function Hero() {
    const imagesMobile = ["images/hero/bg-image-1-mobile.jpg", "images/hero/bg-image-2-mobile.jpg", "images/hero/bg-image-3-mobile.jpg"];
    const imagesTablet = ["images/hero/bg-image-1-tablet.jpg", "images/hero/bg-image-2-tablet.jpg", "images/hero/bg-image-3-tablet.jpg"];
    const imagesDesktop  = ["images/hero/bg-image-1.jpg", "images/hero/bg-image-2.jpg", "images/hero/bg-image-3.jpg"];
    const [indice, setIndice] = useState(0);
    const [backgroundImage, setBackgroundImage] = useState(imagesDesktop[indice]);


    useEffect(() => {
        const updateBackground = () => {
            if (window.innerWidth > 768) {
                setBackgroundImage(imagesDesktop);
            } else if( window.innerWidth > 425) {
                setBackgroundImage(imagesTablet);
            }   else {
                setBackgroundImage(imagesMobile);    
            }   
        }
        updateBackground();
        window.addEventListener("resize", updateBackground);
        return () => window.removeEventListener("resize", updateBackground);
    }, []);

    useEffect(() => {
        const intervalo = setInterval(() => {

          setTimeout(() => {
            setIndice((indiceAnterior) => (indiceAnterior + 1) % imagesDesktop.length);          
          }, 0); // Duração da animação    
        }, 6000); // Intervalo entre trocas de palavras    
        return () => clearInterval(intervalo);
      }, []);

    return (
        <section 
            className={`px-[2px] pt-24  pb-32 relative lg:bg-[url('${imagesDesktop[indice]}')] sm:bg-[url('${imagesTablet[indice]}')] bg-[url('${imagesMobile[indice]}')] bg-cover animate-bg-zoom  bg-no-repeat bg-center `}
            style={{backgroundImage: `url(${backgroundImage[indice]})`, transition: "background-image 500ms ease-out", }}
            >
            
            <div className="bg-[rgba(0,0,0,0.5)] w-full h-full z-10 absolute top-0 left-0 "></div>
            <div className="z-50 relative max-w-[1280px] mx-auto px-[4%] flex md:justify-center justify-start md:items-start items-start gap-8 flex-col py-8 mt-24  ">
                <h1 className="text-white md:text-start  md:font-bold font-semibold  md:text-5xl text-4xl lg:max-w-[680px] tracking-[-2px]">Seu piso está opaco, sujo ou manchado? Nós resolvemos!</h1>
                <p className="text-white md:text-start lg:max-w-[640px] font-normal leading-snug">Somos <strong className="font-bold">especializados</strong> em limpeza e polimento para recuperar a aparência original do seu piso, impermeabilização, mármores, granitos, pedras são tomes, ardósias, marmorite, granitina, porcelanato e outros tipos de materiais.</p>
                <MainButton textButton="Fazer um orçamento"  linkButton="https://www.google.com" target="_blank"></MainButton>
            </div>
        </section>
    );
};