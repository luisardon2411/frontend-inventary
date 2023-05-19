import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './store';


const App = lazy( () => import('./app/App') )

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={ store } >
      <Suspense fallback={ <h1> Esta cargando... </h1> } >
        <App /> 
      </Suspense>
    </Provider>
  </React.StrictMode>,
)
