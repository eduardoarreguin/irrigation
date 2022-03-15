import { useState } from 'react';

export const useForm = <T extends Object, C extends Object >( initState: T, initStateChecked: C ) => {
    
    const [ state, setState ] = useState( initState );
    const [ checket, UseChecket ] = useState( initStateChecked );

    const onChangeText = ( value: string, field: keyof T ) => {
        setState({
            ...state,
            [field]: value
        });
    }
    const handleChangeChk = ( event: React.ChangeEvent<HTMLInputElement>, field: keyof C ) => {
        UseChecket({
            ...checket,
            [field]: event.target.checked
        })
    }

    return {
        ...state,
        checket,
        onChangeText,
        handleChangeChk,
    }

}