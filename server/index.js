const express = require("express");
const dateHandlerRouter = require('../routes/dateHandler.js');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Ok" });
});

app.use('/save-date', dateHandlerRouter);
app.use('/get-date', dateHandlerRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  console.log('INSIDE ERROR HANDLER MIDDLEWARE')
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

//All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
