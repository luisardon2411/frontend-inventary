import {  Routes, Route } from "react-router-dom"
import NotFound from "../pages/public/404/NotFound"

interface RoutesNotFoundProps {
    children?: JSX.Element[] | React.ReactNode
}

const RoutesNotFound = ({ children }: RoutesNotFoundProps ) => {
  return (
    <Routes>
        { children }
        <Route path="*" element={ <NotFound /> } />
    </Routes>
  )
}

export default RoutesNotFound