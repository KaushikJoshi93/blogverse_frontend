import { useState } from "react";



export default function useCookie(key) {
  const cookie_name = "blogverse_user"
  const [cookie, setCookie] = useState(getCookieValue(cookie_name));
  
  function getCookieValue(cookieName) {
    const cookies = document.cookie.split("; ");
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split("=");
  
      if (cookie[0] === cookieName) {
        return JSON.parse(decodeURIComponent(cookie[1]))
      }
    }
  
    return null; // Cookie not found
  }
  
  function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  const setItem = (value) => {
    if(value){
      document.cookie = `${"blogverse_user"}=${JSON.stringify(value)}`;
    }else{
      deleteCookie(cookie_name);
    }
    setCookie(value ?? "");
  };

  return {
    cookie,
    setItem
  };
}
