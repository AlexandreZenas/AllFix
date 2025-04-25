import { FooterStructure } from "./footer-structure";



export function Footer(){
    return(
        <FooterStructure.Root>
            <div className="flex lg:flex-row gap-16 flex-col justify-between items-center">
                <FooterStructure.Links>
                    <FooterStructure.Link link={'#About'} textLink={'Sobre nós'} />
                    <FooterStructure.Link link={'#Services'} textLink={'Serviços'} />
                    <FooterStructure.Link link={'#Faq'} textLink={'FAQ'} />
                </FooterStructure.Links>
                <FooterStructure.Logo image={'icons/Logo-light.svg'} LogoStile={''} linkLogo={'#Hero'}/>
                <FooterStructure.Medias>
                    <FooterStructure.Media image={'icons/footer/whatsapp.svg'} mediaLink={'https://wa.me/5521995983041'} />
                    <FooterStructure.Media image={'icons/footer/email.svg'} mediaLink={'mailto:alexandrezenas11@gmail.com'} />
                </FooterStructure.Medias>
            </div>
            <div className="bg-white w-full mx-auto h-[1px]"></div>
            <FooterStructure.Content>
                <span className="text-white font-medium text-center">©2025 AllFix Reformas - All rights reserved</span>
                <span className="text-white font-medium text-center">Developed by <a className="underline" href="https://impulseonagency.com/" target="_blank">ImpulseOn Agency</a></span>
            </FooterStructure.Content>
        </FooterStructure.Root>
    )
}