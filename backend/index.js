import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import router from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

//Middleware for parsing request body
app.use(express.json());

//middleware for handling CORS policy
//option 1: allow all origins with default of cors(*)
app.use(cors());
//option 2: allow custom origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome');
});

//middleware
app.use('/books', router);

//to connect database
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    //we need a function to listen to this port
    //run express server only when the connection is successful
    app.listen(PORT, () => {
      console.log(`App is listening to this port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
