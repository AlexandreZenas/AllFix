import { MainButton } from "../../../components/buttons/main-button";

export function Hero() {
    return (
        <section className="px-[2px] pt-24 pb-16 bg-[url(images/hero/bg-image-1.jpg)] bg-cover bg-no-repeat bg-center "   >
            <div className="max-w-[1280px] mx-auto px-[4%] flex md:justify-center justify-start md:items-start items-start gap-8 flex-col py-8 mt-24 sm:bg-[#00000000] ">
                <h1 className="text-white md:text-start  md:font-bold font-semibold  md:text-5xl text-4xl lg:max-w-[680px] tracking-[-2px]">Seu piso está opaco, sujo ou manchado ? Nós resolvemos!!</h1>
                <p className="text-white md:text-start lg:max-w-[640px] font-normal leading-snug">Somos <strong className="font-bold">especializados</strong> em: Limpeza e polimento para recuperar a aparência original do seu piso, impermeabilização, mármores, granitos, pedras são tomes, ardósias, marmorite, granitina, porcelanato e outros tipos de materiais.</p>
                <MainButton textButton="Fazer um orçamento"  linkButton="https://www.google.com" target="_blank"></MainButton>
            </div>
        </section>
    );
};