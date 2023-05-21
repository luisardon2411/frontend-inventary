import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


const PrivateRoute = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    return (
        <>
            {
                isAuthenticated ? ( <div></div> ) : <Navigate to='/iniciar-sesion' />
            }
        </>
    )
}

export default PrivateRoute
