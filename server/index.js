import express from 'express';
import mongoose from 'mongoose';
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

//Listener
app.listen(port,() => console.log(`Listening on localhost: ${port}`));