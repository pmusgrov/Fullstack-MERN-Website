// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Calorie Tracker using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const calorieSchema = mongoose.Schema({
	dish:    { type: String, required: true },
	calories:     { type: Number, required: true },
	date: { type: Date, required: true, default: Date.now}
});

// Compile the model from the schema.
const Calorie = mongoose.model('Calorie', calorieSchema);


// CREATE model *****************************************
const createCalorie = async (dish, calories, date) => {
    const calorie = new Calorie({ 
        dish: dish, 
        calories: calories, 
        date: date 
    });
    return calorie.save();
}


// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const retrieveCalories = async () => {
    const query = Calorie.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveCalorieByID = async (_id) => {
    const query = Calorie.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteCalorieById = async (_id) => {
    const result = await Calorie.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateCalorie = async (_id, dish, calories, date) => {
    const result = await Calorie.replaceOne({_id: _id }, {
        dish: dish, 
        calories: calories, 
        date: date 
    });
    return { 
        _id: _id, 
        dish: dish, 
        calories: calories, 
        date: date 
    }
}



// Export our variables for use in the controller file.
export { createCalorie, retrieveCalories, retrieveCalorieByID, updateCalorie, deleteCalorieById }