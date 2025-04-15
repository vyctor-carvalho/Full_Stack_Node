import React from "react"
import Lista from '../componentes/lista'


const getUsuarios = () => {

    
    return (
        <div style={estilo}>
            <Lista />
        </div>
    )
}

export default getUsuarios;

const estilo: React.CSSProperties = {
    height: '100vh',
    display: 'flex', 
    justifyContent: 'center',
    textAlign: 'center'
}

