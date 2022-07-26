
export const Tabla = ({ datos, borrarRegistro }) => {

    const eliminarRegistro = (person) =>{
        const confirmacion = window.confirm('Desea eliminar al dueño ' + person.dueño)
        if(confirmacion){
            const nuevoArreglo = datos.filter(d => d.patente !== person.patente)   
            borrarRegistro(nuevoArreglo)
        }            
    }
    return(
        <table className="table table-bordered">
            <thead className="table-dark">
                <tr>
                     <th>Patente</th>
                     <th>Dueño</th>
                     <th>Marca</th>
                     <th>Color</th>
                     <th>Teléfono</th>
                     <th>Dirección</th>
                     <th></th>
                </tr>
            </thead>
            <tbody>
                {datos.map((person) =>(
                    <tr key={person.patente}>
                        <td>{person.patente}</td>
                        <td>{person.dueño}</td>
                        <td>{person.marca}</td>
                        <td>{person.color}</td>
                        <td>{person.telefono}</td>
                        <td>{person.direccion}</td>
                        <td><button className="btn btn-danger" onClick={()=>eliminarRegistro(person)}>eliminar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

