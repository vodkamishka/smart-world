import React from 'react';
import './app.scss';
import InterfaceContainer from '../interface-container/interface-container';
import {initFireBase} from '../../services/firebase';

export const db = initFireBase();

const App = () => {
    
    
    return (
        
            <InterfaceContainer />
        
    )        
        
}

export default App;