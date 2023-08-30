const express = require("express");
const app = express();
const mongoose = require('mongoose');
const userModel = require('./models/user.js');
const cors = require('cors');


app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://girishoo71690:h5SQwgXZQt6ej@cluster0.dsmddbk.mongodb.net/?retryWrites=true&w=majority");

app.listen(3001, () => {
    console.log("Server connected and runs successfully");
})

app.get("/", (req, res) => {
    res.send("Hello, welcome to the server");
});

app.post("/createUser", async (req, res) => {

    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();

    res.json(user);
});

app.get("/getUsers", (req, res) => {

    userModel.find().then( result => {
        res.json(result);
    });
    
    
});

app.delete("/deleteUser", async (req, res) => {

    const userId = req.body._id;
    console.log("from server");
    console.log(req.body);

    // Use deleteOne with a filter to delete the correct user
    const result = await userModel.deleteOne({ _id: userId });

    if (result.deletedCount === 1) {
        res.json({ message: "User deleted successfully" });
    } else {
        res.status(404).json({ message: "User not found" });
    }
});


