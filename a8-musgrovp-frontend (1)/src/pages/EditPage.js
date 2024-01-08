import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const EditCaloriePage = ({ calorieToEdit }) => {

    const [dish, setDish] = useState(calorieToEdit.dish);
    const [calories, setCalories] = useState(calorieToEdit.calories);
    const [date, setDate] = useState(calorieToEdit.date.slice(0,10));
    
    const redirect = useNavigate();

    const editCalorie = async () => {
        const response = await fetch(`/log/${calorieToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                dish: dish,
                calories: calories,
                date: date,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`document edited`);
            redirect("/log");
        } else {
            alert(`document not updated status code = ${response.status}`);
            redirect("/log");
        }
    };


    return (
        <>
        <article>
            <h2>Edit a calorie log</h2>
            <p>This form allows you edit an entry into the log</p>
            <table id='calories'>
                <caption>Edit a calorie log</caption>
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
                        onClick={editCalorie}
                        id="submit"
                        >Edit</button> the log </td>
                    </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}

export default EditCaloriePage;