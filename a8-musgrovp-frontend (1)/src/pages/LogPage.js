import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CalorieList from '../components/CalorieList.js';      





function LogPage({ setCalorie }) {
    const redirect = useNavigate();

    const [calories, setCalories] = useState([]);

    const loadCalories = async () => {
        const response = await fetch('/log');
        const calories = await response.json();
        setCalories(calories);
    } 
    

    const onEditCalorie = async calorie => {
        setCalorie(calorie);
        redirect("/Edit");
    }


    const onDeleteCalorie = async _id => {
        const response = await fetch(`/log/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/log');
            const calories = await getResponse.json();
            setCalories(calories);
        } else {
            console.error(`Failed to delete calorie with _id = ${_id}, status code = ${response.status}`)
        }
    }

    useEffect(() => {
        loadCalories();
    }, []);

    return (
        <>
            <h2>List of Calories</h2>
            <p>This a list of calories eaten so far!</p>
            <CalorieList 
                calories={calories} 
                onEdit={onEditCalorie} 
                onDelete={onDeleteCalorie} 
            />
        </>
    );
}

export default LogPage;