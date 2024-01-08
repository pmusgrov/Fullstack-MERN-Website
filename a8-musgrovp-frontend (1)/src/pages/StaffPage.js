import React, { useState } from 'react';
import StaffRow from "../components/StaffRow.js"

function StaffPage() {

    const [results, setResults] = useState([]);
    const fetchResults = () => {
        fetch("https://randomuser.me/api/?results=10")
        .then((response) => response.json())
        .then((response) => {
            setResults(response.results)
        })
        .catch(() => {
            alert("The random user generator service is down at the moment");
        });
    };
    return(
        <>
        <h2>Staff</h2>
            <article>
                <p>
                    This page allows you to create "staff" for the website using a random person generator at 10 staff at a time. The new "staff"
                    will populate the list below with general information about them (email, name, etc.).
                </p>
                <button id="tenFrom" onClick = {fetchResults} value ='Generate ten staff from generator.'>Generate Ten.</button>

                <table>
                    <caption> Name, Email, Phone, Location</caption>
                    <thead>
                        <tr>
                            <th>Portrait</th>
                            <th>Name &amp; Email</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody id="randomizedStaff"> 
                        {results.map((staff, i) => <StaffRow staff={staff} key={i} />)}
                    </tbody>
                </table>

            </article>
        </>
    );
}
export default StaffPage;