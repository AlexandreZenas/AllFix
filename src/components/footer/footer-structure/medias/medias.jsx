export function MediaFooter({mediaLink, image}){
    return(
        <a href={mediaLink} target="_blank" rel="noreferrer">
            <img src={image} alt="" />
        </a>
    )
}