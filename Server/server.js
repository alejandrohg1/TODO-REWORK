import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import ToDoRoute from './routes/ToDoRoute.js'

/*Configuration */


dotenv.config();

const app = express();
app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],

}));
app.use(express.json());


/*ROUTES*/

app.use(ToDoRoute)

/*Mongoose SETUP */

const PORT = process.env.PORT || 6001
mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() =>{
  app.listen(PORT,()=> console.log('listening on port '+PORT));
})