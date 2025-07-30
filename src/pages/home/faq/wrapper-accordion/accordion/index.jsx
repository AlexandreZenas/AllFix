import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function Accordion({title, titleStyle, text}){
    const [open, setOpen] = useState(false);
    function accordionToggle(){
        setOpen(!open)
    }
    
    return(
    <div className="hover:cursor-pointer">
        <div className="flex  justify-between border-b-[1px]  border-gray  p-4 gap-4" onClick={accordionToggle}>
            <p className={twMerge('text-md text-gray text-start', titleStyle)} >{title}</p>
            <img className={` duration-500 ease-in-out ${open ? 'rotate-180' : 'rotate-0'}`} src="icons/faq/arrow.svg" alt="" />
        </div>
        <div className={` px-4 mx-2  text-sm duration-500 ease-in-out overflow-hidden ${open ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0'} `}>
            <p className="text-">{text}</p>
        </div>
    </div>
    )
}