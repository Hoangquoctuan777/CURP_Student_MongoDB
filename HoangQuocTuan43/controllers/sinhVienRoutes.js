import express from 'express';
import SinhVien from '../models/sinhVienModel.js';

const sinhvienRouter = express.Router();


//Lay du lieu ve
sinhvienRouter.get('/', async (req, res) => {
  const dsSinhvien = await SinhVien.find();

  res.render('index', {
    dsSinhvien: dsSinhvien,
  });
});


  //Them 
  sinhvienRouter.get('/them-sinh-vien', (req, res) => {
    res.render('them-sinh-vien');
  });
  
  sinhvienRouter.post('/them', async (req, res) => {
    SinhVien.create(req.body);  
    res.redirect('/');
  });
  
  //Sua
  sinhvienRouter.get('/sua-sinh-vien/:id', async (req, res) => {
    const sv = await SinhVien.findById(req.params.id); 
    res.render('sua-sinh-vien', {SinhVien: sv}); 
  }); 
  
  sinhvienRouter.post('/sua', async (req, res) => {
    await SinhVien.findByIdAndUpdate(req.body.id, { $set: req.body }); 
    res.redirect('/');
  });
  
  //Xoa
  sinhvienRouter.get('/xoa-sinh-vien/:id', async (req, res) => {
    await SinhVien.findByIdAndDelete(req.params.id);
    res.redirect('/');
  }); 

export default sinhvienRouter;
