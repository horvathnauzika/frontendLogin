import { createContext, useState } from "react";
import { myAxios } from "../api/MyAxios";
import { useNavigate } from "react-router";

export const AuthContext=createContext("");
export const AuthProvider = ({ children }) => {
  
    const [user, setUser] = useState("");
    const navigacio =useNavigate();
    const csrf = () => myAxios.get("/sanctum/csrf-cookie")

    const regisztacio = async({...adat})=>{
      await csrf();
      try{
        await myAxios.post("/register", adat)
        getUser();
        navigacio("/") //Home komponenshez vezet
      }catch(error){
        console.log(error)
      }
    }

    const logout =  async({...adat})=>{
        await csrf();
        try{
          await myAxios.post("/logout", adat)
          navigacio("/login") //Login komponenshez vezet
        }catch(error){
          console.log(error)
        }
      }
  
    const getUser = async () => {
      const { data } = await myAxios.get("/api/user");
      console.log(data);
      setUser(data);
    }

    return (
        <AuthContext.Provider value={{ regisztacio, user, logout}}>
          {children}
        </AuthContext.Provider>
      );
}