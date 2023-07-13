import Axios from 'axios';

const getToken = async()=>{
    const res  = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/csrf-token/` ,{
      method:"GET",
      credentials:"include"
    });
    const data = await res.json();
    return data.csrfToken;
}


export const userRequest = async()=>{
    const token = await getToken();
    const headers = {
        'X-CSRF-TOKEN': token,
        'Content-Type': 'application/json',
    };
    return Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers,
    withCredentials: true,
    })
}



