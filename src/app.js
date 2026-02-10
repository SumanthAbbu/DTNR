const express = require("express");
const { adminAuth, userAuth } = require("../middlewares/auth.js");
const app = express();
app.use("/admin", adminAuth);
app.get("/user/login", userAuth, (req, res) => {
  res.send("user logged in successfully");
});
app.post("/user/data", (req, res) => {
  res.send("user posted data");
});
app.get("/admin/getAllData", (req, res) => {
  res.send("all data sent");
});
app.get("/admin/deleteData", (req, res) => {
  res.send("all data deleted");
});
app.listen(3000, () => console.log("app is listening on port 3000"));
