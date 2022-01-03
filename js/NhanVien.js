function NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam, loaiNhanVien){
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCoBan = luongCoBan;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.loaiNhanVien = loaiNhanVien;
    this.xepLoai = "";

    this.tongLuong = function(){
        if(this.chucVu == "Sếp" ){
            this.tongLuong = this.luongCoBan * 3;
        }else if(this.chucVu == "Trưởng phòng"){
            this.tongLuong = this.luongCoBan * 2; 
        }else if(this.chucVu == "Nhân viên"){
            this.tongLuong = this.luongCoBan;
        }
    }
    this.xepLoai = function(){
        if(this.gioLam >= 192){
            this.xepLoai = "Xuất sắc";
        }else if(this.gioLam >= 176){
            this.xepLoai = "Giỏi";
        }else if(this.gioLam >= 160){
            this.xepLoai = "Khá"
        }else{
            this.xepLoai = "Trung bình"
        }
    }
}