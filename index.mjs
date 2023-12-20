import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({
    TEST_ENV: process.env.TEST_ENV,
    TEST_ENV_NO_ARG: String(process.env.TEST_ENV_NO_ARG),
    TEST_ENV_NO_DEFAULT: String(process.env.TEST_ENV_NO_DEFAULT),
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started at port ", process.env.PORT);
});
