import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.end("The value of TEST_ENV is " + process.env.TEST_ENV);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started at port ", process.env.PORT);
});
