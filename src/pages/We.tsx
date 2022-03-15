import React from 'react';
import { WeItem } from '../components/WeItem';
export const We = () => {
    return (
        <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: 'black' }}>
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', paddingTop: 50 }} >            

                <div
                    style={{ width: '100%', height: '100%', padding: 10 }} 
                >
                    <WeItem 
                        visible={false}
                    />
                    <WeItem 
                        visible={true} 
                        title='Compromiso' 
                        color='#F9AD01' 
                        direction='left' 
                        text='Lörem ipsum explainer porar fast nirat, i äbel homovyse. 
                            Spesm synfili då hbt inklusive vins. 
                            Egenanställningsföretag nepp ryr soliga. 
                            Rese stenorybär oaktat rede diass. Du kan vara drabbad. 
                            Geor pode koda tren'
                    />

                    <WeItem 
                        visible={false}
                    />
                </div>

                <img src='../assets/diagrama1.png' height={ 640 } width={ 50 } />
                
                <div
                    style={{ width: '100%', height: '100%', padding: 10 }} 
                >
                    <WeItem 
                        visible={true}
                        title='Calidad' 
                        color='#A288E3' 
                        direction='right' 
                        text='Lörem ipsum explainer porar fast nirat, i äbel homovyse. 
                            Spesm synfili då hbt inklusive vins. 
                            Egenanställningsföretag nepp ryr soliga. 
                            Rese stenorybär oaktat rede diass. Du kan vara drabbad. 
                            Geor pode koda tren'
                    />
                    <WeItem 
                        visible={false}
                    />
                    <WeItem 
                        visible={true}
                        title='Experiencia' 
                        color='#00BF00' 
                        direction='right' 
                        text='Lörem ipsum explainer porar fast nirat, i äbel homovyse. 
                            Spesm synfili då hbt inklusive vins. 
                            Egenanställningsföretag nepp ryr soliga. 
                            Rese stenorybär oaktat rede diass. Du kan vara drabbad. 
                            Geor pode koda tren'
                    />
                </div>
            </div>       

            <div style={{ display: 'flex', flexDirection: 'row' }} >
                <img src='../assets/img1.png' width='25%' />
                <img src='../assets/img2.png' width='25%' />
                <img src='../assets/img3.png' width='25%' />
                <img src='../assets/img4.png' width='25%' />
            </div>
            

            <img src='../assets/pasto.png' style={{ position: 'relative', bottom: 0 }} />
        </div>
    )
}
