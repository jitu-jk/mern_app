const mongoose = require("mongoose");
const mongoURI='mongodb+srv://jitesh62684:12345@cluster0.lbq1f.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected successfully");

        const foodItemsCollection = mongoose.connection.db.collection("fooditems");
        const data = await foodItemsCollection.find({}).toArray();
        
        const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");
        const catData = await foodCategoryCollection.find({}).toArray();
        
        console.log("Fetched data:", data);
        console.log("Fetched categories:", catData);

        // Store fetched data in global variables
        global.fooditems = data;
        global.foodCategory = catData;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        // Handle error gracefully here
    }
};

module.exports = connectToMongoDB;
