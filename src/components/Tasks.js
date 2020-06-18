import React from 'react';

const Tasks = () => {
    return (  
        <>
            <h2 className="text-center my-5">Listado de Tareas</h2>
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Tiempo Trabajado</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </>
    );
}
 
export default Tasks;