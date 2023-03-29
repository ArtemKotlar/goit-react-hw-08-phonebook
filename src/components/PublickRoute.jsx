import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth/selectors"
export const PublickRoute=({ children,
    restricted = false,
    redirectTo = '/',})=>{
    const isLogged=useSelector(getIsLoggedIn);
    const shouldRedirect = isLogged && restricted;
    return(
        <>{shouldRedirect ? <Navigate to={redirectTo} replace /> : children}</>
    )
}