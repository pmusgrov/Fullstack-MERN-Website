import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const AddCaloriePage = () => {

    const [dish, setDish]       = useState('');
    const [calories, setCalories]         = useState('');
    const [date, setDate] = useState('');
    
    const redirect = useNavigate();

    const addCalorie = async () => {
        const newCalorie = { dish, calories, date };
        const response = await fetch('/log', {
            method: 'post',
            body: JSON.stringify(newCalorie),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`document added`);
            redirect("/log");
        } else {
            alert(`document not added status code = ${response.status}`);
            redirect("/log");
        }
    };


    return (
        <>
        <article>
            <h2>Add to calorie log</h2>
            <p>This form allows you put a new entry into the log</p>
            <table id='calories'>
                <caption>Add to calorie log</caption>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><label for="title">Food Name
                            <input
                                type="text"
                                placeholder="Food Name"
                                value={dish}
                                onChange={e => setDish(e.target.value)} 
                                id="dish" />
                                </label></td>
                        <td><label for="calorie">Total Calories
                            <input
                                type="number"
                                value={calories}
                                placeholder="Total Calories"
                                onChange={e => setCalories(e.target.value)} 
                                id="calories" />
                                </label></td>
                        <td><label for="date">Date
                            <input
                                type="date"
                                placeholder="Date Eaten"
                                value={date}
                                onChange={e => setDate(e.target.value)} 
                                id="Date" />
                                </label></td>
                        <td> <button
                        type="submit"
                        onClick={addCalorie}
                        id="submit"
                        >Add</button>to the log </td>
                    </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}

export default AddCaloriePage;