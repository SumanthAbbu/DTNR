const express = require("express");
const app = express();
// app.use((req, res) => res.send("Hello from server"));
app.get("/user/:id/:name/:pswrd", (req, res) => {
  console.log(req.params);
  res.send({ name: "sumanth", ID: "113" });
});
app.post("/user", (req, res) => {
  res.send("saved successfully");
});
app.delete("/user", (req, res) => {
  res.send("deleted successfully");
});
app.use("/test", (req, res) => res.send("from TEST request"));

app.use("/test/2", (req, res) => res.send("from TEST2 request"));

app.listen(3000, () => console.log("app is listening on port 3000"));
