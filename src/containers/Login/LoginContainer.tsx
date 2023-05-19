import { useEffect } from 'react'
import { Login } from '../../pages/public/'


const LoginContainer = () => {


  
  useEffect( () => {
    document.title = 'Iniciar Sesion'
  },[])
  return (
    <Login />
  )
}

export default LoginContainer