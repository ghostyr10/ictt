const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://jasim:jasim9080@jasim.njqxdzf.mongodb.net/app?appName=jasim")
  .then(() => {
    console.log("Connected to Atlas DB");
  })
  .catch((error) => {
    console.log(error);
  });
