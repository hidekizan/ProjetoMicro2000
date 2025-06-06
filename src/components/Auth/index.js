import { useState } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../utils/storage";

function PrivateRoute({ children }) {
    // const [logado,] = useState(false)

    return(
        isAuthenticated() ? children : <Navigate to='/login' />
    )
}

export default  PrivateRoute;