// const mongoose = require("mongoose");

// const mongoURI = 'mongodb://jitesh62684:12345@ac-ymf7egw-shard-00-00.ckujn4t.mongodb.net:27017,ac-ymf7egw-shard-00-01.ckujn4t.mongodb.net:27017,ac-ymf7egw-shard-00-02.ckujn4t.mongodb.net:27017/Gofoodmern?ssl=true&replicaSet=atlas-33g048-shard-0&authSource=admin&retryWrites=true&w=majority';

// const connectToMongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true });
//         console.log("Connected successfully");
        
//         const foodItemsCollection = mongoose.connection.db.collection("food_items");

//         const data = await foodItemsCollection.find({}).toArray();
//        console.log("Fetched data:", data);
//     } catch (error) {
//        console.error("Error connecting to MongoDB:", error);
//     }
// };

// module.exports = connectToMongoDB;



// const mongoose = require("mongoose");
// const mongoURI = 'mongodb://jitesh62684:12345@ac-ymf7egw-shard-00-00.ckujn4t.mongodb.net:27017,ac-ymf7egw-shard-00-01.ckujn4t.mongodb.net:27017,ac-ymf7egw-shard-00-02.ckujn4t.mongodb.net:27017/Gofoodmern?ssl=true&replicaSet=atlas-33g048-shard-0&authSource=admin&retryWrites=true&w=majority';

// const MongoDB = async () => {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//         if (err) {
//             console.log("---", err);
//         } else {
//             console.log("connected");
//             const fetched_data = await mongoose.connection.db.collection("food_items");
//             fetched_data.find({}).toArray(function (err, data) {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// };
const mongoose = require("mongoose");

const mongoURI = 'mongodb://jitesh62684:12345@ac-ymf7egw-shard-00-00.ckujn4t.mongodb.net:27017,ac-ymf7egw-shard-00-01.ckujn4t.mongodb.net:27017,ac-ymf7egw-shard-00-02.ckujn4t.mongodb.net:27017/Gofoodmern?ssl=true&replicaSet=atlas-33g048-shard-0&authSource=admin&retryWrites=true&w=majority';

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
