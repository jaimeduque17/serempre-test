import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux
import { useDispatch } from 'react-redux';
import { deleteTaskAction, getTaskEdit } from '../actions/taskActions';

const Task = ({ task }) => {

    const { name, description, estimated, worked, id } = task;

    const dispatch = useDispatch();
    const history = useHistory(); // enable history to redirect

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
        });
    }

    const redirectEdition = task => {
        dispatch(getTaskEdit(task));
        history.push(`/tasks/edit/${task.id}`)
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{`${description.substring(0, 16)}...`}</td>
            <td><span className="font-weight-bold">{estimated}</span> hrs</td>
            <td><span className="font-weight-bold">{worked}</span> hrs</td>
            <td className="actions">
                <button type="button" onClick={() => redirectEdition(task)} className="btn btn-primary mr-2">
                    Editar
                </button>
                <button type="button" className="btn btn-danger" onClick={() => deleteConfirmation(id)}>Eliminar</button>
            </td>
        </tr>
    );
}

export default Task;