import { useState } from "react"

export const Loggedin = () => {
    const [islogged  , setIslogged] = useState(false)
    const handleLogin = () => {
        setIslogged(true)
    }
    const handleLogout = () => {
        setIslogged(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleLogout}>logout</button>
            <div>user is { islogged ? `logged in ` : `logged out`}</div>
        </div>
    )
}