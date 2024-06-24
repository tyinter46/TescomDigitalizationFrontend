import {useAppSelector} from "hooks"
import { Navigate, Outlet } from "react-router-dom"

interface INavigate {
    navigate: string;
}

const protectedRoute = ({navigate}: INavigate ) =>{
    const {isLoggedIn} = useAppSelector((state)=> state.auth);
    return isLoggedIn ? <Outlet /> : <Navigate to = {navigate} replace />
    }


export default protectedRoute;