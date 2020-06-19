import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux actions
import { createTaskAction } from '../actions/taskActions';
import { showAlert, hideAlertAction } from '../actions/alertActions';

const NewTask = ({ history }) => {

    // state of the component
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [estimated, setEstimated] = useState(0);
    const [worked, setWorked] = useState(0);

    // useDispatch return a function
    const dispatch = useDispatch();

    // access to the state of the store
    const loading = useSelector((state) => state.tasks.loading);
    const error = useSelector((state) => state.tasks.error);
    const alert = useSelector((state) => state.alert.alert);

    // call the action of taskAction
    const addTask = (task) => dispatch(createTaskAction(task));

    const submitNewTask = e => {
        e.preventDefault();

        // validate form
        if (name.trim() === '' || description.trim() === '' || estimated <= 0 || worked <= 0) {

            const alert = {
                msg: 'Todos los campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }

            dispatch(showAlert(alert));

            return;
        }

        // if there are not errors
        dispatch(hideAlertAction());

        // create new task
        addTask({
            name,
            description,
            estimated,
            worked
        });

        // redirect
        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nueva Tarea
                        </h2>
                        {alert ? <p className={alert.classes}>{alert.msg}</p> : null}
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
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Descripción Tarea</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Descripción Tarea"
                                    name="description"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Tiempo Estimado Tarea</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Descripción Tarea"
                                    name="estimated"
                                    value={estimated}
                                    onChange={e => setEstimated(Number(e.target.value))}
                                />
                            </div>
                            <div className="form-group">
                                <label>Tiempo Trabajado Tarea</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Descripción Tarea"
                                    name="worked"
                                    value={worked}
                                    onChange={e => setWorked(Number(e.target.value))}
                                />
                            </div>
                            <button type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>
                        {loading ? <p>Loading...</p> : null}
                        {error ? <p className="alert alert-danger p2 mt-4 text-center">There was an error</p> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewTask;