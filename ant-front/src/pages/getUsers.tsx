import React from "react"
import ListUsers from '../components/listUsers'


const getUsers = () => {

    
    return (
        <div style={centrerComponent}>
            <ListUsers />
        </div>
    )
}

export default getUsers;

const centrerComponent: React.CSSProperties = {
    height: '100vh',
    display: 'flex', 
    justifyContent: 'center',
    textAlign: 'center'
}

