import { useState } from "react"

type UserProps = {
    name : string;
    email : string
}


export const User = (props : UserProps)=> {

    const [user , setUser] = useState<null | UserProps>(null)

    const handleLogin = () => {
        setUser(props)
    }   
    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>log in</button>
            <button onClick={handleLogout}>log out</button>
            <div>username is {user?.name}</div>
            <div>email is {user?.email}</div>
        </div>
    )
}