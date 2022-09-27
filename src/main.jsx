import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App';
//import {Contacto} from './components/Contacto' // Ponerlo si se va a ejecutar codigo javascript //SU EXPORTACION ES CON "EXPORT + NOMBREDELACLASE"
//AMBAS SON CORRECTAS SOLO CAMBIA SU FORMA DE EXPORTACION
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
);

