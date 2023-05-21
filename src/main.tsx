import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './store';
import InitialSpinner from './components/Spinners/InitialSpinner';


const App = lazy( () => import('./app/App') )

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={ store } >
      <Suspense fallback={ <InitialSpinner /> } >
        <App /> 
      </Suspense>
    </Provider>
  </React.StrictMode>,
)
