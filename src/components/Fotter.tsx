import React from 'react';
import { NavLink } from "react-router-dom";
import { InfoFotter } from '../components/InfoFotter';
export const Fotter = () => {
    return (
        <div style={ styles.container } >
            <img src='../assets/logo2.png' style={{ marginRight: 50 }} />
            <div>
                <InfoFotter img='icono_ubicacion.png' text='calle: venustiano carraza #21b' />
                <InfoFotter img='icono_telefono.png' text='413 160 6343' />
                <InfoFotter img='icono_celular.png' text='413 160 6014' />
                <InfoFotter img='icono_email.png' text='ealIrrigation77@gmail.com' />                
            </div>
            
            <div style={ styles.line } />

            <div style={{ alignItems: 'center', }} >
                <NavLink 
                    to='/Home' 
                >
                    <div style={{ color: '#CEFDFF', margin: 10 }} >Home</div>
                </NavLink>
                <NavLink 
                    to='/We' 
                >
                    <div style={{ color: '#CEFDFF', margin: 10 }} >We</div>
                </NavLink>
                <NavLink 
                    to='/Contact' 
                >
                    <div style={{ color: '#CEFDFF', margin: 10 }} >Contact</div>
                </NavLink>
            </div>

            
            <div style={ styles.line } />

            <div>
                <img src='../assets/icon_f_Whatsapp.png' style={ styles.imgSocialMedia } />
                <img src='../assets/icon_f_Facebook.png' style={ styles.imgSocialMedia } />
                <img src='../assets/icon_f_Youtube.png' style={ styles.imgSocialMedia } />
                <img src='../assets/icon_f_Instagram.png' style={ styles.imgSocialMedia } />
                <img src='../assets/icon_f_Twitter.png' style={ styles.imgSocialMedia } />
            </div>
        </div>
    )
}

const styles={
    container:{ 
        backgroundColor: 'black', 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 50  
    } as React.CSSProperties ,
    img:{
        width: 30,
        height: 30
    },
    imgSocialMedia:{
        width: 50,
        height: 50
    },
    line:{
        width: 1, height: 102, backgroundColor: 'gray', marginLeft: 30, marginRight: 30
    }
}
