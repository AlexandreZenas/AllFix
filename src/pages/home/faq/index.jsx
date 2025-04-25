import { MainButton } from "../../../components/buttons/main-button";
import { WrapperAccordion } from "./wrapper-accordion";
import { Accordion } from "./wrapper-accordion/accordion";

export function Faq(){
    return(
        <section id="Faq" className="py-24">
            <div className="max-w-[1280px] flex flex-col  gap-16 mx-auto   px-[4%]">   
                <div className="flex items-center flex-col gap-4">
                    <h1 className="font-bold text-5xl text-blue">FAQ</h1>
                    <span>Perguntas Frequentes | ALL FIX Reformas</span>
                </div>
                <div className="flex lg:flex-row flex-col gap-8 flex-start items-start">
                <WrapperAccordion>
                    <Accordion                        
                        title={'Quais tipos de piso vocês limpam e revitalizam?'}
                        text="Atendemos diversos tipos de piso, como mármores, granitos, pedras são tomes, ardósias, marmorite, granitina, porcelanato e outros tipos de materiais. Cada material requer um tratamento específico para garantir o melhor resultado."
                    />
                    <Accordion                        
                        title={'Quanto tempo dura o processo de polimento ou limpeza profunda? '}
                        text="O tempo varia conforme o tipo de piso e o tamanho da área, mas em média, um serviço pode levar entre 1 a 3 dias."
                    />
                    <Accordion 
                        title="O polimento de pisos remove riscos e manchas?" 
                        text="Sim! Nosso processo de polimento é capaz de eliminar riscos superficiais, marcas de ferrugem e manchas causadas pelo tempo ou uso inadequado de produtos de limpeza."
                    />
                </WrapperAccordion>
                <WrapperAccordion>
                    <Accordion                        
                        title={'Como funciona o serviço de polimento de pisos ?'}
                        text="O polimento remove riscos, manchas e imperfeições, devolvendo brilho e proteção ao piso. Utilizamos equipamentos profissionais e produtos específicos para cada tipo de material."
                    />
                    <Accordion                        
                        title={'Quais os principais benefícios dos serviços de limpeza e polimento de pisos?'}
                        text="Piso mais bonito e brilhante, maior durabilidade e resistência, remoção de sujeiras e manchas profundas e ambiente mais higiênico e seguro"
                    />
                    <Accordion 
                        title="Como posso agendar um orçamento ?" 
                        text="É simples! Basta entrar em contato pelo nosso WhatsApp ou telefone e agendamos um orçamento gratuito para você."
                    />
                </WrapperAccordion>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 py-16">
                    <h1 className="font-bold text-center md:text-5xl text-3xl  text-blue">Vamos construir o seu projeto juntos!</h1>
                    <span className="text-center">Entre em contato conosco para iniciar essa parceria hoje !!</span>
                    <MainButton linkButton={'https://wa.me/5521995983041'} textButton={"Solicitar Orçamento"} />
                </div>
            </div>
        </section>
    )
}