import express from 'express';
import mongoose from 'mongoose';
import Cards from './models/dbCards.js';
import Cors from 'cors';

//App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =  'mongodb+srv://admin:Physics54321@cluster0.25kmy.mongodb.net/xmemedb?retryWrites=true&w=majority';

//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const con = mongoose.connection;
con.on('open',() => console.log('connected...'));


//API endpoints
app.get('/',(req,res) => res.status(200).send("hello world"));

app.post('/memes',(req,res) => {
  const card = req.body;
  Cards.create(card,(err,data) => {
    if (err) {
      res.status(500).send(err);
      let id = Cards._id;
      res.end('Added the meme with id' + id);
    } else {
      res.status(201).send(data);
    }
  });
});
app.get('/memes',(req,res) => {
  Cards.find((err,data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  }); 
});
app.get('/memes/:id',(req,res) => {
  console.log(req.params.id);
  Cards.findById(req.params.id,(err,data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
//Listener
app.listen(port,() => console.log(`Listening on localhost: ${port}`));