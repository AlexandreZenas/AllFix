import { twMerge } from "tailwind-merge";

export function WrapperAccordion({children, wrapperStyle}){
    return(
        <div className={twMerge("w-full flex flex-col justify-between gap-6 flex-wrap", wrapperStyle)}>
            {children}
        </div>
    )
}