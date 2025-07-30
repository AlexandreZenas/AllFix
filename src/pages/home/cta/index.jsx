import { MainButton } from "../../../components/buttons/main-button";

export function Cta() {
    return (
        <section id="Cta" className="bg-dark-green py-16">
            <div className="2xl:max-w-[1440px] xl:max-w-[1280px] mx-auto px-4 flex md:flex-row flex-col md:text-start text-center justify-between items-center gap-8">
                <h2 className="font-bold text-white lg:text-4xl text-4xl  ">Quer nos conhecer ? <br />
                    Agende uma visita hoje!</h2>
                <MainButton textButton="Fazer um orçamento"  linkButton="https://wa.me/5521997155021" styleButton={"border-[1px] border-black bg-white text-dark-green"} styleBTN={''} target="_blank"/>
            </div>
        </section>
    );
}