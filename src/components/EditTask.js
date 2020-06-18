import React from 'react';

const EditTask = () => {
    return (  
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Tarea
                        </h2>
                        <form>
                            <div className="form-group">
                                <label>Nombre Tarea</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Tarea"
                                    name="name"
                                />
                            </div>
                            <div className="form-group">
                                <label>Descripción Tarea</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Descripción Tarea"
                                    name="description"
                                />
                            </div>
                            <div className="form-group">
                                <label>Tiempo Estimado Tarea</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Descripción Tarea"
                                    name="estimated"
                                />
                            </div>
                            <div className="form-group">
                                <label>Tiempo Trabajado Tarea</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Descripción Tarea"
                                    name="worked"
                                />
                            </div>
                            <button type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EditTask;