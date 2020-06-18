import React from 'react';
import { Link } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { deleteTaskAction } from '../actions/taskActions';

const Task = ({ task }) => {

    const { name, description, estimated, worked, id } = task;

    const dispatch = useDispatch();

    // delete confirmation
    const deleteConfirmation = id => {
        // ask to the user

        // pass to the action
        dispatch(deleteTaskAction(id));
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