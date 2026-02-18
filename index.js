const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
var PORT = 3009;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://jasim:jasim9080@jasim.njqxdzf.mongodb.net/app?appName=jasim");

const BlogModel = require("./model");


app.post("/add", async (req, res) => {
  try {
    const newBlog = new BlogModel(req.body);
    await newBlog.save();
    res.send("Data added successfully");
  } catch (error) {
    console.log(error);
  }
});


app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});


app.delete("/delete/:id", async (req, res) => {
  try {
    await BlogModel.findByIdAndDelete(req.params.id);
    res.send("Data deleted successfully");
  } catch (error) {
    console.log(error);
  }
});


app.put("/update/:id", async (req, res) => {
  try {
    await BlogModel.findByIdAndUpdate(req.params.id, req.body);
    res.send("Data updated successfully");
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});