import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux actions
import { createTaskAction } from '../actions/taskActions';

const NewTask = () => {

    // useDispatch return a function
    const dispatch = useDispatch();

    // call the action of taskAction
    const addTask = () => dispatch(createTaskAction());

    const submitNewTask = e => {
        e.preventDefault();

        // validate form

        // create new task
        addTask();
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nueva Tarea
                        </h2>
                        <form
                            onSubmit={submitNewTask}
                        >
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
                            >Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewTask;