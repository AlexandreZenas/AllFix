import { MainButton } from "../../../components/buttons/main-button";
import { ServicesCard } from "./services-card";

export function Services() {
    return (
        <section id="Services" className="py-24">
            <div className="2xl:max-w-[1440px] xl:max-w-[1280px] mx-auto px-4 flex flex-col-reverse gap-8">
                <div className="flex flex-col items-center gap-8">
                    <h1 className="font-bold text-dark-green lg:text-5xl text-4xl text-center max-w-[440px]">Soluções para todo tipo de jardim</h1>
                    <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-8 gap-y-16 py-10">
                        <ServicesCard
                            title="Jardinagem e Paisagismo" 
                            description="Planejamento e execução de áreas verdes que aliam estética, funcionalidade e bem-estar. " 
                            image="images/services/jardinagem-e-paisagismo.png" 
                        />
                        <ServicesCard
                            title="Projetos Personalizados" 
                            description="Desenvolvemos projetos exclusivos, considerando o estilo do local, a arquitetura e as preferências do cliente. " 
                            image="images/services/projetos-personalizados.png" 
                        />
                        <ServicesCard
                            title="Implantação de Jardins" 
                            description="Cuidamos de todo o processo de criação do seu jardim,  desde a preparação do solo até a escolha e plantio das espécies. " 
                            image="images/services/implantação-de-jardim.png" 
                        />
                        <ServicesCard
                            title="Manutenção Completa" 
                            description="Oferecemos serviços periódicos ou pontuais de corte de grama, poda, limpeza, replantio, controle de pragas  para manter o jardim sempre agradável." 
                            image="images/services/manutenção-de-jardim.png" 
                        />
                        <ServicesCard
                            title="Adubos e substratos" 
                            description="Trabalhamos com adubos orgânicos e minerais, além de substratos de alta qualidade, ideais para estimular o crescimento, a floração e o fortalecimento das plantas." 
                            image="images/services/adubos.png" 
                        />
                        <ServicesCard
                            title="Aplicação de fungicidas para pragas de jardim" 
                            description="Realizamos o diagnóstico e o tratamento de doenças e infestações. Usamos produtos eficazes para proteger seu jardim contra fungos, insetos e outras ameaças." 
                            image="images/services/aplcação-de-fungicidas.png" 
                        />
                    </div>
                    <div className="w-full flex flex-col items-center gap-8">
                        <p className="text-center text-lg font-medium">Polimento e limpeza para recuperar a aparência original do seu piso</p>
                        <MainButton styleButton={'border-none'} textButton="Fazer um orçamento"  linkButton="https://wa.me/5521997155021" target="_blank"></MainButton>
                    </div>
                </div>
            </div>
        </section>
    );
};