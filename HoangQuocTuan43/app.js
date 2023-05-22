import express from 'express';
import mongoose from 'mongoose';
import sinhvienRouter from './controllers/sinhVienRoutes.js';
import bodyParser from 'body-parser';

mongoose
  .connect('mongodb+srv://admin:admin@cluster0.2qvscxg.mongodb.net/QLSV')
  .then(() => {
    console.log('Thành công');
  })
  .catch((err) => {
    console.log('Thất bại');
  });

const app = express();  

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(express.static('public')); 

app.use(sinhvienRouter); 

app.listen(5000, () => {
  console.log(`Cổng: 5000`);
});