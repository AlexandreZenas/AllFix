import { MainButton } from "../../../components/buttons/main-button";

export function About() {
    return (
        <section id="About" className="py-24">
            <div className="max-w-[1280px] mx-auto px-[4%] flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/2"> <img src="images/about/image-1.png" alt="" /></div>
                <div className="lg:w-1/2 flex flex-col justify-center items-start gap-4">
                    <h4 className="font-semibold text-blue text-sm tracking-wider">Sobre nós</h4>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold">Se você está procurando uma empresa confiável para tratar o seu piso, encontrou.</h1>
                    <h3 className="">Especializada em limpeza e restauração de pisos no Rio de Janeiro</h3>
                    <p className="text-sm text-gray">ALL FIX foi idealizada e criada para atender as necessidades e especificidades dos diversos tipos de superfícies, unindo tecnologia de ponta, produtos de primeira linha e mão de obra especializada. Sempre com o objetivo de prestar um serviço altamente qualificado, prezando pela conservação do patrimônio dos nossos clientes.</p>
                    <h3 className="pt-4">Por que escolher a ALL FIX?</h3>
                    <div className="flex flex-col gap-2 pb-4 px-4 text-gray text-sm">
                        <span className="">• Especialista em tratamento de pisos</span>
                        <span className="">• Tratamento diferenciado para cada tipo de superfície</span>
                        <span className="">• Materiais e técnicas diferenciadas</span>
                        <span className="">• Visita técnica gratuita</span>
                        <span className="">• Orçamento sem compromisso</span>
                    </div>
                    <MainButton linkButton={'https://wa.me/5521920004819'} textButton={'Fazer um orçamento'} />
                </div>
            </div>
        </section>
    );
}
