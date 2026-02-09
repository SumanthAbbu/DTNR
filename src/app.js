const express = require("express");
const app = express();
app.use((req, res) => res.send("Hello from server"));
app.use("/test", (req, res) => res.send("hello from test request"));
app.use("/hello", (req, res) => res.send("hello from HELLO request"));
app.listen(3000, () => console.log("app is listening on port 3000"));
