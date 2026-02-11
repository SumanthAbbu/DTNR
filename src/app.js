const express = require("express");
const { connectDB } = require("./config/dataBase.js");
const User = require("./Models/user.js");
const app = express();

//middleware for parsing jsonvdata from req -  js object
app.use(express.json());
//-- POST -SIGNUP API --
app.post("/signUp", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("data saved !");
  } catch (err) {
    res.status(400).send("user not saved");
  }
});
//-- GET - ONE USER AND ALL USERS(FEED) --
app.get("/user", async (req, res) => {
  // try {
  //   const user = await User.findOne({ userID: req.body.userID });
  //   if (!user) res.status(404).send("user not found");
  //   else res.send(user);
  // } catch (err) {
  //   res.status(500).send("soemthing went wrong : internal server error");
  // }
  try {
    const users = await User.find({ userID: req.body.userID });
    if (users.length === 0) res.status(404).send("user not found");
    else res.send(users);
  } catch (err) {
    res.status(500).send("soemthing went wrong : internal server error");
  }
});
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) return res.status(404).send("users not found");
    res.send(users);
  } catch (err) {
    res.status(500).send("soemthing went wrong : internal server error");
  }
});
//-- DELETE API --
app.delete("/user", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.body.id);
    res.send("deleted successfully!");
  } catch (err) {
    res.status(500).send("something went wrong : internal server error");
  }
});
//--- UPDATE API ---
app.patch("/user", async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.body.id, req.body);
    res.send("updated successfuly!");
  } catch (err) {
    res.status(500).send("something went wrong : internal server error");
  }
});
// app.post("/signUp", async (req, res) => {
//   const user = new User({
//     firstName: "Ian",
//     lastName: "Bell",
//     userID: "Lbell@hotmail",
//   });
//   try {
//     await user.save();
//     res.send("data posted successfully!");
//   } catch (err) {
//     res.status(400).send("error saving the user");
//   }
// });
connectDB()
  .then(() => {
    console.log("connection succesful to dataBase");
    app.listen(3000, () => console.log("app is listening on port 3000"));
  })
  .catch((err) => {
    console.error("something went wrong! connection is unsuccessful");
  });
