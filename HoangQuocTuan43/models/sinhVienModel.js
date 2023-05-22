import mongoose from 'mongoose';

const sinhvienSchema = new mongoose.Schema(
  {
    MASV: String,
    HODEM: String,
    TEN: String,
    GIOITINH: String,
    NGAYSINH: Date,
    NOISINH: String,
    MALOP: String,
  },
  {
    collection: 'Sinhvien',
  }
);

const SinhVien = mongoose.model('SinhVien', sinhvienSchema);
export default SinhVien;
