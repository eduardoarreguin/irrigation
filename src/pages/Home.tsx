import { TextHome }  from '../components/TextHome';
import { Fotter }  from '../components/Fotter';
export const Home = () => {
    return (
        <div>
            <img src={'../assets/rectangulo_bicolor.png'} style={{ width: '100%', height: 539 }} />
            <div style={{ display: 'flex' }}  >
                <img src={'../assets/logo1.png'} style={{ position: 'absolute',  top: 240, left: 40 }} /> 


                <TextHome text="We're" top={ 250 } left='37' color='black' />
                <TextHome text="your" top={ 240 } left='57' color='white' />
                <TextHome text="best" top={ 400 } left='35' color='black' />
                <TextHome text="option" top={ 400 } left='52' color='white' />
            </div>    
            
            <div style={{ width: '100%', height: 63, backgroundColor: 'black', marginTop: -10 }} /> 
            <div style={{ width: '100%', height: 13, backgroundColor: '#30BF39' }} />       
            <Fotter />
        </div>
    )
}

const styles = {
    text:{
        position: 'absolute' as 'absolute',  
        top: 240,
        left: 40
    } as React.CSSProperties
}


