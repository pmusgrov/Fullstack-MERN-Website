import 'dotenv/config';
import express from 'express';
import * as calories from './model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/log', (req,res) => { 
    calories.createCalorie(
        req.body.dish, 
        req.body.calories, 
        req.body.date
        )
        .then(calorie => {
            res.status(201).json(calorie);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'create a document failed' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/log', (req, res) => {
    calories.retrieveCalories()
        .then(calorie => { 
            if (calorie !== null) {
                res.json(calorie);
            } else {
                res.status(404).json({ Error: 'document not found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'retrieve document failed.' });
        });
});


// RETRIEVE by ID controller
app.get('/log/:_id', (req, res) => {
    calories.retrieveCalorieByID(req.params._id)
    .then(calorie => { 
        if (calorie !== null) {
            res.json(calorie);
        } else {
            res.status(404).json({ Error: 'document not found' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'retrieve document failed' });
    });

});


// UPDATE controller ************************************
app.put('/log/:_id', (req, res) => {
    calories.updateCalorie(
        req.params._id, 
        req.body.dish, 
        req.body.calories, 
        req.body.date
    )
    .then(calorie => {
        res.json(calorie);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'document update failed' });
    });
});


// DELETE Controller ******************************
app.delete('/log/:_id', (req, res) => {
    calories.deleteCalorieById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'document no longer exists' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'delete a document failed' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});