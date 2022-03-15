interface Props{
    title?: string;
    color?: string;    
    text?: string
    direction?: string;
    visible: boolean;
}

export const WeItem = ({ title, color, text, direction, visible }: Props) => {

    
    return(
        <div 
            style={{ width: '100%', height: 210, display: 'flex', alignItems: direction == 'right'? 'flex-start' : 'flex-end', justifyContent: 'flex-star', flexDirection: 'column'  }}
        >   
            {
                visible?
                    <>
                        <h3 
                            style={{ color, fontSize: 40, marginTop: 0, marginBottom: 0 }} 
                        >{ title }</h3>
                        <p 
                            style={{ color: '#9DD9D2', maxWidth: 400, textAlign: direction === 'right'? 'left' : 'right' }} 
                        >
                            { text }
                        </p>
                    </>
                    :
                    <></>
            }
            
        </div>
    )
}