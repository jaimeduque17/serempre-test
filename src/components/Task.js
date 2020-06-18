import React from 'react';
import { Link } from 'react-router-dom';

const Task = ({ task }) => {

    const { name, description, estimated, worked, id } = task;

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
                <button type="button" className="btn btn-danger">Eliminar</button>
            </td>
        </tr>
    );
}

export default Task;