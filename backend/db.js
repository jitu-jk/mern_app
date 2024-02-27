const mongoose = require("mongoose");

const mongoURI = 'mongodb://jitesh62684:12345@ac-ymf7egw-shard-00-00.ckujn4t.mongodb.net:27017,ac-ymf7egw-shard-00-01.ckujn4t.mongodb.net:27017,ac-ymf7egw-shard-00-02.ckujn4t.mongodb.net:27017/Gofoodmern?ssl=true&replicaSet=atlas-33g048-shard-0&authSource=admin&retryWrites=true&w=majority';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected successfully");
        
        const foodItemsCollection = mongoose.connection.db.collection("fooditems");

        const data = await foodItemsCollection.find({}).toArray();
       console.log("Fetched data:", data);
    } catch (error) {
       console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectToMongoDB;
