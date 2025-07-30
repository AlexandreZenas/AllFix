import { MainButton } from "../../../components/buttons/main-button";
import { WrapperAccordion } from "./wrapper-accordion";
import { Accordion } from "./wrapper-accordion/accordion";

export function Faq(){
    return(
        <section id="Faq" className="py-24">
            <div className="2xl:max-w-[1440px] xl:max-w-[1280px] mx-auto px-4] flex flex-col  gap-16  ">   
                <div className="flex items-center flex-col gap-4">
                    <h1 className="font-bold text-5xl text-dark-green">Perguntas <br />frequentes</h1>
                    <span>Veja as principais dúvidas dos nossos clientes


</span>
                </div>
                    <div className="font-[helvetica] flex lg:flex-row flex-col gap-8 flex-start items-start">
                <WrapperAccordion>
                    <Accordion 
                        title="Com que frequência a manutenção do jardim deve ser feita?" 
                        text="Depende do tipo de jardim e da estação do ano. Em geral, recomendamos manutenções quinzenais ou mensais para manter o jardim saudável, limpo e bonito durante todo o ano."
                    />
                    <Accordion                        
                        title={' Como funciona a contratação de um projeto de paisagismo?'}
                        text="Primeiro, realizamos uma visita técnica para entender o espaço, suas necessidades e preferências. Depois, elaboramos um projeto personalizado com layout, espécies indicadas e sugestões estéticas. Com o projeto aprovado, iniciamos a implantação."
                    />
                    <Accordion                        
                        title={' É possível contratar apenas a manutenção do jardim? '}
                        text="Sim! Você pode contratar somente a manutenção, mesmo que o jardim não tenha sido feito por nós. Oferecemos serviços avulsos ou planos mensais de manutenção, conforme a necessidade do espaço."
                    />
                    <Accordion 
                        title="Quanto tempo leva para implantar um jardim completo?" 
                        text="O prazo depende do tamanho e complexidade do projeto, mas em média, a implantação pode levar de 2 a 10 dias úteis. Informamos o cronograma detalhado após a aprovação do projeto."
                    />
                </WrapperAccordion>
                <WrapperAccordion>
                    <Accordion                        
                        title={' Vocês fornecem as plantas ou o cliente precisa comprar?'}
                        text="Nós cuidamos de tudo! Fornecemos as plantas, adubos, substratos e todos os materiais necessários para o projeto ou manutenção. Mas, se preferir, o cliente pode indicar ou fornecer espécies específicas."
                    />
                    <Accordion                        
                        title={' Trabalham com espécies específicas de plantas?'}
                        text="Trabalhamos com uma grande variedade de espécies — ornamentais, nativas, tropicais e até frutíferas. Sempre indicamos as melhores opções de acordo com o clima, tipo de solo, iluminação e gosto do cliente."
                    />
                    <Accordion 
                        title={"Vocês oferecem visitas técnicas antes do orçamento?" }
                        text="Sim! A visita técnica é fundamental para avaliarmos o espaço e entender suas necessidades. Após a visita, enviamos um orçamento detalhado, sem compromisso."
                    />
                    <Accordion 
                        title={"Quais formas de pagamento vocês aceitam?" }
                        text="Aceitamos pagamentos via transferência bancária, PIX, cartão de crédito (parcelado) e boleto. Também podemos negociar condições especiais para contratos mensais ou serviços recorrentes."
                    />
                </WrapperAccordion>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 py-16">
                    <span className="text-center text-black font-semibold tracking-wide">Entre em contato conosco para iniciar essa parceria hoje !!</span>
                    <MainButton linkButton={'https://wa.me/5521997155021'} textButton={"Solicitar Orçamento"} />
                </div>
            </div>
        </section>
    )
}