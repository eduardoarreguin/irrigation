import { useCallback, useEffect } from 'react';

import { 
    Routes,
    Route,
    useLocation
  } from "react-router-dom";

//import './firebase/firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { firebaseApp } from './firebase/firebase';

import { Home } from './pages/Home';
import { We } from './pages/We';
import { Contact } from './pages/Contact';

import { SuperiorBar } from './components/SuperiorBar';
import { MyNavLink } from './components/MyNavLink';




export const RealIrrigationApp = () => {
    
    const dbFirestore = getFirestore(firebaseApp);

    useEffect(() => {
        getMyInfo( dbFirestore )
    })
    // Get a list of cities from your database
    async function getMyInfo(dbFirestore: any ) {
    const myCollection = collection(dbFirestore, 'pruebaCollection');
    const myDocs = await getDocs(myCollection);
    const myList = myDocs.docs.map(doc => doc.data());
    console.log( myDocs );
    console.log( myList[0] );
    return myList;
    }


    const { search } = useLocation();
    useCallback(
        () => {
            return new URLSearchParams(search);
        },
        [ search ]
    );
    
    
    return (
        <>  
            <SuperiorBar />
                       
                    
                <div style={ styles.content } >
                    <div  style={{ justifyContent: 'center'}} >
                        <img src={'../assets/REAL_GREEN_IRRIGATION.png'} />
                    </div>
                    <div style={ styles.contentRight } >
                        <MyNavLink to='/Home' />                        
                        <MyNavLink to='/We' />
                        <MyNavLink to='/Contact' />
                    </div>
                
                </div>               

                <Routes>
                    <Route path='/Home' element={ <Home /> } />
                    <Route path='/We' element={ <We /> } />
                    <Route path='/Contact' element={ <Contact /> } />

                    <Route path='*' element={ <Home /> } />
                </Routes>

        </>
    );
}


const styles = {
    content:{
        backgroundColor: '#134611',
        height: 106,
        display: 'flex',
        paddingLeft: 40,
        alignItems: 'center'

    },
    contentRight:{
         display: 'flex', 
         width: '100%', 
         justifyContent: 'flex-end', 
         paddingRight: 30, 
         paddingTop: 35
    },
    element:{
        color: 'white',
        fontSize: 40, 
    },
}


