const express = require("express");
const { connectDB } = require("./config/dataBase.js");
const User = require("./Models/user.js");
const app = express();

app.post("/signUp", async (req, res) => {
  const user = new User({
    firstName: "Ian",
    lastName: "Bell",
    userID: "Lbell@hotmail",
  });
  try {
    await user.save();
    res.send("data posted successfully!");
  } catch (err) {
    res.status(400).send("error saving the user");
  }
});
connectDB()
  .then(() => {
    console.log("connection succesful to dataBase");
    app.listen(3000, () => console.log("app is listening on port 3000"));
  })
  .catch((err) => {
    console.error("something went wrong! connection is unsuccessful");
  });
