import { Navigate } from "react-router-dom";
import { UserAuth } from "./Context";

export default function ProtectRoute({ children }) {
    const {user} = UserAuth();
    if (!user) {
        return <Navigate to='/login' />;
    } else {
        return children;
    }
};