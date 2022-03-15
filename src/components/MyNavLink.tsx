import React from 'react';
import { NavLink } from "react-router-dom";


interface Props {
    to: string
}
export const MyNavLink = ( { to } : Props ) => {
    
    let URLactual = window.location.pathname;
    
    return (
        <NavLink 
            to={to} 
        >
                                
        
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <h1 style={ styles.elementRouter }>{to.substring(1)}</h1>    
                {
                    URLactual === to&&
                    <img src={'../assets/marcador_de_pagina.png'}  style={{ position: 'absolute', marginTop: 38, zIndex: 999 }} /> 
                }
                
            </div>
                                
        </NavLink>
    )
}

const styles = {
    elementRouter:{
        fontSize: 22, 
        color: 'white',
        padding: 5,
        margin: 5,
        fontWeight: 'bold',
        textDecorationLine: 'none',
    }
}