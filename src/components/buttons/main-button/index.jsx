import { twMerge } from "tailwind-merge";

export function MainButton({textButton, imgPath,imgAlt, styleButton, styleBTN, target, linkButton}){

    function clickAds(){
        return gtag_report_conversion(linkButton);
      }
    return(
            <a 
                className={twMerge("hover:cursor-pointer py-4 px-6 hover:text-gray transition-all text-white  bg-blue ", styleButton)}
                target={target} 
                onClick={clickAds}
            >
                <button className={twMerge("hover:cursor-pointer flex items-center gap-2 justify-center -tracking-tighter", styleBTN)}>
                    {textButton}
                    <img src={'icons/arrow.svg'} alt={'arrow'} />
                </button>
            </a>
    )
}