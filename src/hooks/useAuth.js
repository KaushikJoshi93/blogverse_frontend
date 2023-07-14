import { userRequest } from "@/lib/axios";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import useCookie from "./useCookie";

export const useAuth = () => {
    const router = useRouter();
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(false);
    const cookie_name = "blogverse_user"
    const { setItem } = useCookie("");

    useEffect(()=>{
        getCookieValue(cookie_name)
    },[])

    function getCookieValue(cookieName) {
        const cookies = document.cookie.split("; ");
      
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].split("=");
      
          if (cookie[0] === cookieName) {
            let cookie_val =  JSON.parse(decodeURIComponent(cookie[1]))
            setItem(cookie_val);
            return cookie_val;
          }
        }
      
        return null; // Cookie not found
      }
    const register = async (data) => {
        try {
            setLoading(true)
            const res = await (await userRequest()).post("/register", data);
            const res_data = await res.data;
            router.push("/");
            setLoading(false);
            return res_data;
        } catch (err) {
            setError(err.response.data);
            setLoading(false);
            console.log(err);
        }
    }

    const login = async (data) => {
        try {
            setLoading(true);
            const res = await (await userRequest()).post("/login", data);
            const res_data = await res.data;
            router.push("/");
            setLoading(false);
            const user_data = await getUser();
            setItem(user_data)
            window.location.reload();
            return res_data;
        } catch (err) {
            console.log(err)
            if (err.hasOwnProperty("response")) {
                setError(err.response.data);
            }
            setLoading(false);
        }
    }




    const logout = async () => {
        try {
            setLoading(true);
            const res = await (await userRequest()).post('/logout');
            const res_data = await res.data;
            router.push("/");
            setLoading(false);
            const user_data = await getUser();
            setItem(user_data)
            window.location.reload()
            return res_data;
        } catch (err) {
            if (err.hasOwnProperty("response")) {
                setError(err.response.data);
            }
            setLoading(false);
            console.log(err)
        }
    }

    const getUser = async () => {
        try {
            setLoading(true);
            const res = await (await userRequest()).get("/api/user");
            const res_data = await res.data;
            setLoading(false);
            console.log(res_data)
            return res_data;
        } catch (err) {
            if (err.hasOwnProperty("response")) {
                setError(err.response.data);
                setLoading(false);
                console.log(err.response.data);
                if (err.response.data.messsage == "Unauthenticated") {
                    return "";
                }
            }
            return null;
        }
    }

    return {
        register,
        login,
        logout,
        getUser,
        error,
        loading
    }
}