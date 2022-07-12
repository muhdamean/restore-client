import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";


// interface Props {
//     location:string;
// }
// interface Props extends RouteProps{ 
//     component: ComponentType<RouteComponentProps<any>> | ComponentType<any>
// }

export default function PrivateRoute({...options}){
    const location = useLocation();
    const {user}=useAppSelector(state=>state.account);
    return (
        user ? <Outlet {...options} /> : <Navigate to="/login" state={{ from: location }} />
    )
}


// export default function PrivateRoute({component: Component, ...rest}: Props){
//     const {user}=useAppSelector(state=>state.account);
//     return (
//         <Route 
//             {...rest}
//             render={props=>
//                 user ?(
//                     <Component {...props} />
//                 ): (
//                     <Navigate to="/login" state={props.location}
//                     />
//                 )
//             }
//         />
//     )
// }