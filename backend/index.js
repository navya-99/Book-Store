import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome');
});

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
