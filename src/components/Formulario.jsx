import { useState } from "react"

export const Formulario = ({ añadirPersona }) => {
    const initForm = {
        patente:'',
        marca:'',
        color:'',
        dueño:'',
        telefono:'',
        direccion:''
    }

    const [valoresForm, setValoresForm] = useState(initForm)

    const { patente,marca,color,dueño,telefono,direccion } = valoresForm

    const inputChange = (event) => {
        setValoresForm({
            ...valoresForm,
            [event.target.name]: event.target.value
        })
    }
    const clickEvent = (e) => {
        e.preventDefault()
        añadirPersona(valoresForm)
        setValoresForm({ ...initForm })
    }
    return (
        <div className="card bg-danger">
            <div className="card-header">
                <h2 className="text-center text-white">Registro Vehiculo☺</h2>
            </div>

                <div className="card-body bg-light">
                    <label>Dueño:</label>
                    <input type="text" className="form-control" name="dueño" value={dueño} onChange={inputChange}/>
                    
                    <label>Patente:</label>
                    <input type="text" className="form-control" name="patente" value={patente} onChange={inputChange}/>
                    
                    <label>Marca:</label>
                    <input type="text" className="form-control" name="marca" value={marca} onChange={inputChange}/>
                    
                    <label>Color:</label>
                    <input type="text" className="form-control" name="color" value={color}  onChange={inputChange}/>
                    
                    <label>Teléfono:</label>
                    <input type="tel" className="form-control" name="telefono" value={telefono} onChange={inputChange}/>

                    <label>Dirección:</label>
                    <input type="text" className="form-control" name="direccion" value={direccion} onChange={inputChange}/>
                </div>

                <div className="card-footer">
                    <input type="submit" onClick={clickEvent} className="btn btn-dark" value="Agregar" />
                </div>
        </div>
    )
}