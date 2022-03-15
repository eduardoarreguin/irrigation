import React from 'react'

interface Props{
    img: string;
    text: string;
}
export const InfoFotter = ({ img, text }: Props ) => {
    return (
        <div style={ styles.container } >
            <img src={`../assets/${ img }`} style={ styles.img } />
            <div style={ styles.text } >{ text }</div>
        </div>
    )
}

const styles={
    container:{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 3 
    } as React.CSSProperties,
    img:{
        width: 30,
        height: 30
    },
    text:{ 
        color: '#CEFDFF', 
        marginLeft: 5 
    }
}
