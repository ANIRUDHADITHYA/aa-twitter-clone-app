import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from "axios";

const ProtectRouter = ({ children }) => {
    const navigate = useNavigate();

    const [authUser, setAuthUser] = useState(false);

    const [cookies, setCookie, removeCookie] = useCookies([]);


    const logout = () => {
        removeCookie("jwt");
        navigate("/")
    };

    useEffect(() => {
        const verifyUser = async () => {
            if (!cookies.jwt) {
                navigate("/")
            } else {
                const { data } = await axios.post("http://localhost:3001/", {}, { withCredentials: true });
                if (!data.status) {
                    removeCookie("jwt");
                    navigate("/")
                } else {
                    setAuthUser(true)
                }
            }
        }

        verifyUser()
    }, [cookies, navigate, removeCookie])

    if(authUser) {
        return children
    }


}


export default ProtectRouter;