import React, { useEffect } from 'react';
import Task from './Task';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getTasksAction } from '../actions/taskActions';

const Tasks = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        // consult API
        const loadTasks = () => dispatch(getTasksAction());
        loadTasks();
    }, []);

    /// obtain th state
    const tasks = useSelector(state => state.tasks.tasks);
    const error = useSelector(state => state.tasks.error);
    const loading = useSelector(state => state.tasks.loading);

    return (
        <>
            <h2 className="text-center my-5">Listado de Tareas</h2>
            {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null}
            {loading ? <p className="text-center">Cargando...</p> : null}
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Tiempo Estimado</th>
                        <th scope="col">Tiempo Trabajado</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.length === 0 ? 'No hay Tareas' : (
                        tasks.map(task => (
                            <Task
                                key={task.id}
                                task={task}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </>
    );
}

export default Tasks;