import express from 'express';
const app = express();
const PORT = 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//global err handler
// app.use((err, req, res) => {
//     const defaultErr = {
//       log: "Express error handler caught unknown middleware error",
//       status: 500,
//       message: { err: "An error occurred" },
//     };
//     const errorObj = {...defaultErr, ...err };
//     console.log(errorObj.log);
//     return res.status(errorObj.status).json(errorObj.message);
//   });

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
