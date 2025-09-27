import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const login = (username, password) => {
        if(username === "admin" && password === "password"){
            setUser({ username: "admin" });
            Navigate("/dashboard");
            return true;
        } else {
            alert("Credenciales inválidas");
            return false;
        }
    }  // En esta función se simula un inicio de sesión, en nuestro proyecto se conecta al backend

    const logout = () => {
        setUser(null);
        Navigate("/login");
    }

    return(
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}