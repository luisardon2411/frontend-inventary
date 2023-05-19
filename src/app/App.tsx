import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginContainer } from "../containers"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/iniciar-sesion" element={ <LoginContainer /> }  />
        </Routes>
    </BrowserRouter>
  )
}

export default App