import { useState } from "react";



export default function useCookie(key) {
  const cookie_name = "blogverse_user"
  const [cookie, setCookie] = useState(key);
  
  
  
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
    setItem,
  };
}
