import { useEffect, useRef, useState } from "react";
import { MainButton } from "../buttons/main-button";
import './index.css'

export function Navbar(){
    const [menuOpen, setmenuOpen] = useState(false);

    function toggleMenu() {
        setmenuOpen(!menuOpen);
        if (!menuOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }

    const navbarRef = useRef(null)
    const [boolean, setBoolean] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        
        function handleScroll(){
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setBoolean(false)
                
            } else if (currentScrollY < lastScrollY) {
                setBoolean(true)                
            }
            lastScrollY = currentScrollY;
        }

        window.addEventListener('scroll', () => {   
            handleScroll()
        })        
    }, []);  

    return(
        <nav id="navbar" className={`w-full  transition-all duration-500   z-[999]  ${boolean ? 'fixed translate-y-0' : 'fixed -translate-y-96' } `} ref={navbarRef}>
            <div className="max-w-[1280px] relative mx-auto flex py-4  px-[2%] w-full justify-between  items-center ">
                <a href="#Hero">
                    <img className="w-32" src="icons/Logo.svg" alt="Logo" />
                </a>
                <div className="lg:flex  hidden gap-8 items-center">
                    <a className=" text-white text-shadow hover:text-green font-medium" href="#Services">Serviços</a>
                    <a className=" text-white text-shadow  hover:text-green font-medium" href="#WhoWeServe">Quem atendemos</a>
                    <a className=" text-white text-shadow hover:text-green font-medium  " href="#Faq">FAQ</a>
                    <MainButton 
                        styleButton={'text-xs py-3'}
                        target={'_blank'}
                        textButton={'Fazer um orçamento'}
                        linkButton={'https://wa.me/5521997155021'}
                    />
                </div>
                <div className="flex lg:hidden gap-4">
                    <img src="icons/navbar/menu.svg" alt="menu" onClick={toggleMenu}/>
                    <div className={`${menuOpen ? '-left-0  duration-[.75s] ' : '-left-[200vw] duration-[1s] delay-500'} fixed h-screen  w-[100vw] bg-[rgba(15,15,15,0.4)] top-0 `} >
                        <div className={`${menuOpen ? ' -left-0  duration-[1s] delay-500' : ' -left-[200vw] duration-[1s] '} absolute h-full w-5/6 bg-dark-green items-center flex flex-col px-8 py-8 gap-8`}>
                            <div className="flex justify-between w-full">
                                <img className="w-1/3" src="icons/Logo-light.svg" alt="Logo" />
                                <img src="icons/navbar/close.svg" alt="close" onClick={toggleMenu}/>
                            </div>
                            <div className="w-full h-[2px] bg-white"></div>
                            <div className="flex flex-col w-full h-auto gap-6 items-start py-8">
                                <a className="text-lg text-white font-medium" href="#About" onClick={toggleMenu}>Sobre</a>
                                <a className="text-lg text-white font-medium" href="#Services" onClick={toggleMenu}>Serviços</a>
                                <a className="text-lg text-white font-medium pb-4" href="#Faq" onClick={toggleMenu}>FAQ</a>
                                <MainButton 
                                        styleButton={'bg-green  '}
                                        styleBTN={'text-white hover:text-white'}
                                        target={'_blank'}
                                        textButton={'Fazer um orçamento'}
                                        linkButton={'https://wa.me/5521997155021'}
                                />

                            </div>
                        </div>
                        <div className='absolute h-full w-1/6 right-0' onClick={toggleMenu}>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}