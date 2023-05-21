import { BrowserRouter, Route } from "react-router-dom"
import { LoginContainer } from "../containers"
import PrivateRoute from "../utils/PrivateRoute"
import { lazy } from "react"

const RoutesNotFound = lazy( () => import('../utils/RoutesNotFound') );

const App = () => {
  return (
    <BrowserRouter>
        <RoutesNotFound>
            {/** Private Routes */}
            <Route path="/" element={ <PrivateRoute /> } >

            </Route>
            {/** Public Routes */}
            <Route path="/iniciar-sesion" element={ <LoginContainer /> }  />
        </RoutesNotFound>
    </BrowserRouter>
  )
}

export default App