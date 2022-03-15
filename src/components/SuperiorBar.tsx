import { ImgSocialMedia } from './ImgSocialMedia'
export const SuperiorBar = () => {
    return (
        <div style={ styles.content} >
            <div style={ styles.element} >413-160-63-43</div>            
            <div style={ styles.element} >/</div>
            <div style={{ ...styles.element, marginRight: 20 }} >461-370-31-90</div>
            
            <ImgSocialMedia 
                url="https://web.whatsapp.com/"
                source='../assets/icon_whatsapp.png'
                width={ 32 }
                height={ 30 }
            />
            <ImgSocialMedia 
                url="https://www.facebook.com/Real-Green-Irrigation-484445198581746"
                source='../assets/icon_facebook.png'
                width={ 32 }
                height={ 30 }
            />
            <ImgSocialMedia 
                url="https://www.instagram.com/renevazquezarreguin/?hl=es"
                source='../assets/icon_instagram.png'
                width={ 32 }
                height={ 30 }
            />
            
            
        </div>
    )
}

const styles = {
    content:{
        backgroundColor: 'white',
        height: 45,
        display: 'flex',
        color: '#FF715B',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 20
    },
    element:{
        marginLeft: 5,
    }
}
