import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editTaskAction } from '../actions/taskActions';

const EditTask = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    // new state of the task
    const [task, setTask] = useState({
        name: '',
        description: '',
        estimated: '',
        worked: ''
    });

    // task to edit
    const taskedit = useSelector(state => state.tasks.edittask);

    useEffect(() => {
        setTask(taskedit);
    }, [taskedit]);

    // read the form data
    const onChangeForm = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const { name, description, estimated, worked } = task;

    const submitEditTask = (e) => {
        e.preventDefault();
        dispatch(editTaskAction(task));
        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Tarea
                        </h2>
                        <form
                            onSubmit={submitEditTask}
                        >
                            <div className="form-group">
                                <label>Nombre Tarea</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Tarea"
                                    name="name"
                                    value={name}
                                    onChange={onChangeForm}
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
                                    onChange={onChangeForm}
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
                                    onChange={onChangeForm}
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
                                    onChange={onChangeForm}
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