import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase";


export const ContextAPI = createContext();

const ContextTheme = ({children})=>{

    const [theme, setTheme] = useState('light')
    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')):null);
    const [loading,setLoading] = useState(true)
    const toogleTheme = (value)=>{
       setTheme(value)
    }

    useEffect(()=>{
        const subscribe = async () => {
           try{
             await onAuthStateChanged(auth, (userData)=>{
                setUser(userData)
            })
           }catch(err){
            alert(err.message)
           }finally{
            setLoading(false)
           }
        }

        return ()=> subscribe();
    },[])
    return(
        <ContextAPI.Provider value={{theme,toogleTheme, user, loading}}>
            {children}
        </ContextAPI.Provider>
    )
}

export default ContextTheme;