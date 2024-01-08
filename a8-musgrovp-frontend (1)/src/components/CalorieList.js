import React from 'react';
import {FcAddRow } from 'react-icons/fc';  
import LogRow from '../components/LogRow.js';      


function CalorieList({ calories, onDelete, onEdit }) {
    return (
        <table id="calories">
            <caption>Add and Edit Calories</caption>
            <thead>
                <tr>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th>Dish</th>
                    <th>Calories</th>
                    <th>Date</th>
                    <th><a href="/Create"><FcAddRow></FcAddRow></a></th>
                </tr>
            </thead>
            <tbody>
                {calories.map((calorie, i) => 
                    <LogRow 
                        calorie={calorie} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default CalorieList;