import React from 'react';
import {FcRedo, FcDislike } from 'react-icons/fc';     

function LogRow({ calorie, onDelete, onEdit }) {
    return (
        <tr>
            <td><i><FcDislike onClick={() => onDelete(calorie._id)} ></FcDislike></i></td>
            <td><i><FcRedo onClick={() => onEdit(calorie)} ></FcRedo></i></td>
            <td title="What is the food you ate?">{calorie.dish} </td>
            <td title="How many calories was the food?">{calorie.calories} </td>
            <td title="When did you eat this dish?">{calorie.date.slice(0,10)} </td>
        </tr>
    );
}
export default LogRow;