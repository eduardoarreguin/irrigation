import React from 'react';
import { globalStyles } from '../styles/globalStyles';

interface Props {
    name: string
    field: string,
    checked: boolean,
    error?: boolean,
    handleChangeChk: Function
}
export const FormGroupCheckbox = ({ name, field, checked, error, handleChangeChk}: Props ) => {
    return(
        <div>
            <input 
                type='checkbox' 
                onChange={ ( event ) => handleChangeChk( event, [field] ) } 
                checked={ checked }
            />
            <label style={{ ...globalStyles.label, marginLeft: 5 }} >{ name }</label>
            { error&& <span style={ globalStyles.labelAlert }>This field is required</span> }
        </div>

        
    ) 
};

