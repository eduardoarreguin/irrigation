
interface Props{
    url: string;
    source: string
    width: number,
    height: number
}

export const ImgSocialMedia = ({ url, source, width, height }: Props) => {
    return(
        <a style={ styles.element} href={ url } >
            <img src={ source } width={ width } height={ height } />
        </a>
    )
}

const styles = {
    
    element:{
        marginLeft: 5,
    }
}