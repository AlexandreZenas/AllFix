import { MainButton } from "../../../components/buttons/main-button";
import { ServicesCard } from "./services-card";

export function Services() {
    return (
        <section id="Services" className="py-24">
            <div className="max-w-[1280px] mx-auto px-[4%] flex flex-col-reverse gap-8">
                <div className="flex flex-col items-center gap-8">
                    <h1 className="font-bold text-blue lg:text-5xl text-4xl text-center">Oferecemos um serviço completo!</h1>
                    <div className="w-32 h-[2px] bg-blue"></div>
                    <span className="text-xl ">Para cada tipo de superficie</span>  
                    <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-8 gap-y-16 py-10">
                        <ServicesCard
                            title="Polimento" 
                            description="Restauramos o brilho do seu piso, eliminando riscos e opacidade com polimento profissional para um acabamento impecável e duradouro." 
                            image="images/services/image-1.png" 
                        />
                        <ServicesCard
                            title="Revitalização" 
                            description="Renovamos pisos desgastados, removendo sujeiras profundas e devolvendo sua aparência original sem necessidade de substituição." 
                            image="images/services/image-2.png" 
                        />
                        <ServicesCard
                            title="Remoção de manchas" 
                            description="Eliminamos manchas difíceis de gordura, tinta, ferrugem e outros resíduos sem danificar seu piso." 
                            image="images/services/image-3.png" 
                        />
                        <ServicesCard
                            title="Impermeabilização" 
                            description="Protegemos seu piso contra umidade e manchas com impermeabilização profissional, facilitando a manutenção e aumentando sua durabilidade." 
                            image="images/services/image-4.png" 
                        />
                        <ServicesCard
                            title="Remoção de Cera" 
                            description="Removemos camadas antigas de cera acumulada, restaurando a beleza natural do piso e aplicando nova proteção se necessário." 
                            image="images/services/image-5.png" 
                        />
                        <ServicesCard
                            title="Limpeza Pós-Obra" 
                            description="Removemos resíduos de cimento, tinta e poeira, deixando seu ambiente pronto para uso com uma limpeza eficiente e detalhada." 
                            image="images/services/image-6.png" 
                        />
                    </div>
                    <div className="w-full flex flex-col items-center gap-8">
                        <p className="text-center text-lg font-medium">Polimento e limpeza para recuperar a aparência original do seu piso</p>
                        <MainButton styleButton={'hover:bg-light-blue border-none'} textButton="Fazer um orçamento"  linkButton="https://wa.me/5521995983041" target="_blank"></MainButton>
                    </div>
                </div>
            </div>
        </section>
    );
};