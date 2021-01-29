import express from "express";
import router from "./locations.js";

/*
import functions from "./utils.js";

console.log("hello");
const arr = [2, 4, 12, 9];
console.log(functions.search(arr, 12));
console.log(functions.isPalindrome("heck"));
console.log(functions.isPalindrome("otto"));
*/
const app = express();
//const router = express.Router();
app.get("/", function (req, res) {
  res.send("hello world");
});

app.use("/hello", (req, res) => {
  console.log("hello");
  next();
});
app.use("/world", (req, res) => {
  console.log("world");
  next();
});

app.use("/locations", router);

const server = app.listen(8080, () => {
  console.log(`Listening on port ${server.address().port}`);
});
