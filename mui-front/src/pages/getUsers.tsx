import React from "react"
import List from '../components/UserList'


const getUsers = () => {

    return (
        <div style={getStyle}>
            <List />
        </div>
    )
}

export default getUsers;

const getStyle: React.CSSProperties = {
    height: '100vh',
    display: 'flex', 
    justifyContent: 'center',
    textAlign: 'center'
}

