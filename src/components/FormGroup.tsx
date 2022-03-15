import React from 'react'
import { globalStyles } from '../styles/globalStyles';
interface Props{
    label: string,
    name: string,
    value: string,
    required?: boolean,
    error?: boolean,
    onChangeText: Function
}

export const FormGroup = ({ label, name, value, required, error, onChangeText }: Props ) => {
   
    return (
        <div style={ styles.formGroup } > 
            <label 
                style={{ ...styles.label, marginBottom: 5 }} 
            >
                { label }
                { required&& <span style={ styles.required } >*</span> }
                { error&& <span style={ globalStyles.labelAlert }>This field is required</span> }
                
            </label>
            <input  
                style={ styles.input }   
                onChange={ ( event ) => onChangeText( event.target.value, name ) }
                value={ value }  
            />
        </div>
    )
}


const styles ={
    formGroup:{ 
        display: 'flex', 
        flexDirection: 'column', 
        marginTop: 20,  
        width: '40%',
    } as React.CSSProperties,
    label:{
        fontSize: 16,
    } as React.CSSProperties,
    required:{
        color: '#FF715B'
    } as React.CSSProperties,
    input:{
        backgroundColor: '#F2F0F0',
        textDecoration: 'none',
        border: 0,      
        height: 28,
        paddingLeft: 12
    } as React.CSSProperties,
    
} 