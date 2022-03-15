interface Props{
    text: string,
    top: number,
    left: number | string,
    color: string,
}
export const TextHome = ({ text, top, left, color }: Props ) => {
    console.log( typeof(left) )
    return(
        <div style={{ ...styles.text, top, 
            left: typeof(left) === 'number'? left : `${left}%`, 
            color }} >{ text }</div>
    )
    
    
}

const styles = {
    text:{
        position: 'absolute' as 'absolute',     
        fontSize: 72     
    } as React.CSSProperties
}