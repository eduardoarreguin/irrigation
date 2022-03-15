export interface MyForm{
    name: string,
    email: string,
    phoneNumber: string,
    address: string,     
    message: string,  
    checkets: Checkets    
    
}

interface Checkets{
    generalInformation: boolean,
    quote: boolean,
    recurringCustomer: boolean,
    others: boolean,
    acceptPrivacyPolicy: boolean
}