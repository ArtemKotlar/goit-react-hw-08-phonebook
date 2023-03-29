import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth/selectors"


export const PrivateRoute=({children,redirectTo = '/'})=>{
    const isLogged=useSelector(getIsLoggedIn);
    return(
        <>{isLogged ?children:<Navigate to={redirectTo} replace />}</>
    )
}