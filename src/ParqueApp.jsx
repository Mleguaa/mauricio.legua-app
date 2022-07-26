import { useState, useEffect } from "react"
import { Formulario } from "./components/Formulario"
import { Tabla } from "./components/Tabla"
const personas = () => {
    return JSON.parse(localStorage.getItem('Personas')) || []
}
export const ParqueApp = () => {
    const [valor, setValor] = useState(personas)
    const añadirRegistro = (nuevoRegistro) => {
        if (valor.filter(item => item.patente === nuevoRegistro.patente).length > 0)
            return alert('El usuario ya existe')
        setValor([nuevoRegistro, ...valor])
    }
    useEffect(() => {
        localStorage.setItem('Personas', JSON.stringify(valor))
    }, [valor])

    const eliminarValor = (registro) => {
        console.log(registro)
        setValor([...registro])
    }
    return (
        <div className="container">
            <div>
                <h1 className="text-center mt-5 mb-5 bg-danger text-white">~Parque Automotriz~</h1>
            </div>
            <div className="row mt-5">
                <div className="col-9">
                    <h2 className="text-center bg-danger text-white">Registros</h2>
                    <Tabla datos={valor} borrarRegistro={eliminarValor}  />
                </div>
                <div className="col-3">
                    <Formulario añadirPersona={añadirRegistro} />
                </div>
            </div>
        </div>
    )
}
