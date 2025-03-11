import { MainButton } from "../../../components/buttons/main-button";

export function Benefits() {
    return (
        <section className="py-24 bg-blue bg-[url('images/benefits/bg-benefits.png')] bg-cover bg-center">
            <div className="max-w-[1280px] mx-auto px-[4%] flex lg:flex-row flex-col-reverse gap-8">
                <div className="lg:w-3/5 flex flex-col gap-6 items-start">   
                    <h1 className="text-white md:text-start  md:font-bold font-semibold  md:text-5xl text-4xl">Chegou a hora de tratar o seu piso!</h1>
                    <p className="text-white font-bold">Seu piso está sem brilho, manchado ou desgastado? Não espere mais! A solução está ao seu alcance.</p>
                    <p className="text-white">Com nossos serviços de polimento, revitalização e impermeabilização, seu piso voltará a ter um aspecto impecável, valorizando seu ambiente e aumentando sua durabilidade.</p>
                    <div className="flex flex-col gap-1">
                        <div className="flex pl-3 gap-2"><img src="icons/benefits/check.svg" alt="check icon" /><span className="text-white">Elimine manchas e desgastes</span></div>
                        <div className="flex pl-3 gap-2"><img src="icons/benefits/check.svg" alt="check icon" /><span className="text-white">Recupere o brilho original</span></div>
                        <div className="flex pl-3 gap-2"><img src="icons/benefits/check.svg" alt="check icon" /><span className="text-white">Proteja seu piso contra danos futuros</span></div>
                    </div>
                    <MainButton       
                        styleButton={'bg-light-blue border-2 border-light-blue hover:text-white text-blue text-start items-start justify-start'}              
                        textButton="Fazer um orçamento" 
                        linkButton="https://www.google.com" 
                        target="_blank"
                    />
                </div>
                <div className="lg:w-2/5 w-full flex justify-center">
                    <img className="w-full sm:w-4/5 md:w-auto -mt-36 relative z-20" src="images/benefits/image.png" alt="" />
                </div>
            </div>
        </section>
    );
};