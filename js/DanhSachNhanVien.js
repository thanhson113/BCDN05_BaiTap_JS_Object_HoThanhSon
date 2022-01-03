function DanhSachNhanVien(){
    this.mangNhanVien = [];

    this.themNhanVien = function(nv){
        this.mangNhanVien.push(nv);
    }
    this.timviTri = function(taiKhoan){
        var viTri = -1;
        this.mangNhanVien.map(function(nv,index){
            if(nv.taiKhoan === taiKhoan){
                viTri = index;
            }
        })
        return viTri;
    }
    this.xoaNhanVien = function(taiKhoan){
        var viTri = this.timviTri(taiKhoan);
        if(viTri != -1){
            this.mangNhanVien.splice(viTri,1)
        }
    }
    this.capNhatNhanVien = function(nhanVien){
        var viTri = this.timviTri(nhanVien.taiKhoan);
        if(viTri != -1){
            this.mangNhanVien[viTri] = nhanVien;
        }
    }
    this.timNhanVienTheoLoai = function(loaiNV){
        var mangTimKiem = [];
        loaiNV = loaiNV.trim().toLowerCase();
        this.mangNhanVien.map(function(nv){
            var xepLoai = nv.xepLoai.trim().toLowerCase();
            if(xepLoai.indexOf(loaiNV) != -1){
                mangTimKiem.push(nv);
            }
        })
        return mangTimKiem; 
    }
}