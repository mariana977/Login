import { useState } from "react"
import { useAuth } from "../context/AuthContext"

export default function Login() {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(usuario, password)
    }

    return(

        <div>
            <form onSubmit={handleSubmit}>
                <h2>Iniciar sesión</h2>
                <input type="text" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>


    )
}
