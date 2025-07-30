import { twMerge } from "tailwind-merge";

export function MainButton({textButton, imgPath,imgAlt, styleButton, styleBTN, target, linkButton}){

    function clickAds(){
        return gtag_report_conversion(linkButton);
      }
    return(
            <a 
                className={twMerge("hover:bg-green cursor-pointer py-4 px-6 transition-all text-white  bg-dark-green ", styleButton)}
                target={target} 
                onClick={clickAds}
            >
                <button className={twMerge("flex items-center cursor-pointer gap-2 justify-center -tracking-tighter", styleBTN)}>
                    {textButton}
                    <img src={'icons/arrow.svg'} alt={'arrow'} />
                </button>
            </a>
    )
}