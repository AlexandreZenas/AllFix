import { twMerge } from "tailwind-merge";

export function LinkFooter({link, textLink, linkStyle}){
    return(
        <a className={twMerge('text-white font-semibold', linkStyle)} href={link}>{textLink}</a>
    )
}