import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux
import { useDispatch } from 'react-redux';
import { deleteTaskAction } from '../actions/taskActions';

const Task = ({ task }) => {

    const { name, description, estimated, worked, id } = task;

    const dispatch = useDispatch();

    // delete confirmation
    const deleteConfirmation = id => {
        // ask to the user
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás recuperar la tarea si la eliminas!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, elimínala!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                // pass to the action
                dispatch(deleteTaskAction(id));
            }
        })
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td><span className="font-weight-bold">{estimated}</span> hrs</td>
            <td><span className="font-weight-bold">{worked}</span> hrs</td>
            <td className="actions">
                <Link to={`/tasks/edit/${id}`} className="btn btn-primary mr-2">
                    Editar
                </Link>
                <button type="button" className="btn btn-danger" onClick={() => deleteConfirmation(id)}>Eliminar</button>
            </td>
        </tr>
    );
}

export default Task;