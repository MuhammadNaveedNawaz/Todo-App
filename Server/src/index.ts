import express from "express";
import "./db";
import cors from 'cors'
import noteRouter from './routers/node'

// create a server

const app = express();

app.use(cors());
// this will parse post request coming from fetch.post() method
app.use(express.json());

// this will parse post request coming from html form
app.use(express.urlencoded({ extended: false }));

/*
*
"localhost:8000/note/create"
"localhost:8000/note"
"localhost:8000/note/noteId"
"localhost:8000/note/noteId"
**/ 
app.use("/note",noteRouter)

// listen to some port
app.listen(8000, () => {
  console.log(" I am listening to create");
});