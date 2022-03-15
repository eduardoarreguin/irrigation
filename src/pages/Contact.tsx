import React, { useState } from 'react';
import { FormGroup } from '../components/FormGroup';
import { FormGroupCheckbox } from '../components/FormGroupCheckbox';
import { Fotter }  from '../components/Fotter';
import { useForm } from '../hooks/useForm';

export const Contact = () => {

    const { name, email, phoneNumber, address, message, checket, onChangeText, handleChangeChk } = useForm({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',     
        message: '',  
        
    },
    {
        generalInformation: false,
        quote: false,
        recurringCustomer: false,
        others: false,
        acceptPrivacyPolicy: false
    });

    const [ errors, setErrors ] = useState({
        name: false,
        phoneNumber: false,       
        acceptPrivacyPolicy: false
    })

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        event.preventDefault(); console.log(checket)
        let controlErrors = {
            name: false,
            phoneNumber: false,
            acceptPrivacyPolicy: false
        }
        if ( name==='') controlErrors.name = true; 
        if ( phoneNumber==='') controlErrors.phoneNumber = true;
        if ( checket.acceptPrivacyPolicy === false ) controlErrors.acceptPrivacyPolicy = true;

        setErrors( controlErrors );

        if( controlErrors.name=== false && 
            controlErrors.phoneNumber === false &&
            controlErrors.acceptPrivacyPolicy === false
        ){
            console.log('listo para enviar ')
        }
        
    }
    return (
        <div style={ styles.container }>
            <img src='../assets/Baner-Imagen-encabezado.png' style={{ position: 'relative', bottom: 0 }}   />

            <div style={ styles.content } >
                
                <form style={{ width: '100%' }} >

                    <p style={ styles.label } >Contact us and we will respond in a personalized way, always looking for ways to offer you the best service.</p>

                    <div style={ styles.lineForm } >                        
                        <FormGroup label='Name' onChangeText={ onChangeText } name='name' value={name} error={ errors.name } required />                        
                        <FormGroup label='Email' onChangeText={ onChangeText } name='email' value={email}  />
                        
                    </div>

                    <div style={ styles.lineForm } >
                        <FormGroup label='Phone Number' onChangeText={ onChangeText } name='phoneNumber' value={phoneNumber} error={ errors.phoneNumber } required />
                        <FormGroup label='Address' onChangeText={ onChangeText } name='address' value={address}   />
                    </div>

                    <p style={{ ...styles.label, marginTop: 40 }} >How can we help you?</p>
                    
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40 }} >
                        <FormGroupCheckbox 
                            name='General Information' 
                            checked={ checket.generalInformation } 
                            handleChangeChk={ handleChangeChk } 
                            field='generalInformation' 
                        />
                        <FormGroupCheckbox 
                            name='Quote' 
                            checked={ checket.quote } 
                            handleChangeChk={ handleChangeChk } 
                            field='quote' 
                        />
                        <FormGroupCheckbox 
                            name='Recurring customer' 
                            checked={ checket.recurringCustomer } 
                            handleChangeChk={ handleChangeChk } 
                            field='recurringCustomer' 
                        />
                        <FormGroupCheckbox 
                            name='Others' 
                            checked={ checket.others } 
                            handleChangeChk={ handleChangeChk } 
                            field='others'
                        />                                              
                    </div>


                    <label style={ styles.label } >Message</label>
                    <textarea 
                        style={ styles.inputTextArea } 
                        onChange={ ( event ) => onChangeText( event.target.value, 'message' ) }
                        value={ message }      
                    />


                    <div style={{ marginTop: 20 }} >
                        <FormGroupCheckbox 
                            name='I accept the Privacy Policy' 
                            checked={ checket.acceptPrivacyPolicy } 
                            handleChangeChk={ handleChangeChk } 
                            field='acceptPrivacyPolicy' 
                            error={ errors.acceptPrivacyPolicy }
                        /> 
                    </div>

                    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }} >
                        <button style={ styles.button } type='submit' onClick={( event )=> handleSubmit( event )} >Send</button>
                    </div>

                </form>
            </div>
            <Fotter />
        </div>
    )
}

const styles ={ 
    container:{
        overflow: 'hidden', 
        display: 'flex', 
        flexDirection: 'column', 
        backgroundColor: 'black'
    } as React.CSSProperties,
    content:{ 
        backgroundColor: 'white', 
        width: '100% - 40px', 
        borderRadius: 20, 
        margin: 20, 
        paddingTop: 20,
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 20,
        display: 'flex', 
        alignItems: 'center', 
        flexDirection: 'column' 
    } as React.CSSProperties, 
    lineForm:{ 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'flex-end', 
        justifyContent: 'space-between'
    } as React.CSSProperties,
    label:{
        fontSize: 16,
    } as React.CSSProperties,
    inputTextArea:{
        backgroundColor: '#F2F0F0',
        textDecoration: 'none',
        border: 0,      
        height: 100,
        width: '100%',
        paddingLeft: 12,
        paddingTop: 10,
        marginTop: 5
    } as React.CSSProperties,
    button:{
        backgroundColor: '#FF715B', 
        color: 'white', 
        width: 157, 
        height: 34, 
        border: 0, 
        borderRadius: 6, 
        fontSize: 18,
        marginBottom: 50,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    } as React.CSSProperties
}
