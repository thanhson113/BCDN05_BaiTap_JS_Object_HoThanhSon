var taiKhoan = getEle('tknv');
var hoTen = getEle('name');
var email = getEle('email');
var matKhau = getEle('password');
var ngayLam = getEle('datepicker');
var luongCoBan = getEle('luongCB');
var chucVu = getEle('chucvu');
var gioLam = getEle('gioLam');
var danhSachNV = new DanhSachNhanVien();
var validation = new Validation();
getLocalStorage();

// Lấy id
function getEle(id) {
    return document.getElementById(id);
}

// Gọi modal 
function goiModal(modalTitle, boolean, type) {
    getEle('header-title').innerHTML = modalTitle;
    getEle('tknv').disabled = boolean;

    switch (type) {
        case 'them':
            getEle('btnCapNhat').style.display = "none";
            getEle('btnThemNV').style.display = "block";
            break;
        case 'capnhat':
            getEle('btnCapNhat').style.display = "block";
            getEle('btnThemNV').style.display = "none";
            break;
    }

}
getEle('btnThem').addEventListener('click', function () {
    resetForm();
    goiModal('Thêm nhân viên', false, 'them');
});



// Kiểm tra bằng onkeyup
getEle('tknv').onkeyup = function () {
    var isValid = true;
    isValid &= validation.checkID(taiKhoan.value, 'tbTKNV', 'Tên tài khoản đã tồn tại', danhSachNV.mangNhanVien);
}
getEle('name').onkeyup = function () {
    var isValid = true;
    isValid &= validation.checkName(hoTen.value, 'tbTen', 'Tên nhân viên phải là chữ')
}
getEle('email').onkeyup = function () {
    var isValid = true;
    isValid &= validation.checkEmail(email.value, 'tbEmail', 'Email phải đúng định dạng')
}
getEle('password').onkeyup = function () {
    var isValid = true;
    isValid &= validation.checkPass(matKhau.value, 'tbMatKhau', 'Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)')
}
getEle('luongCB').onkeyup = function () {
    var isValid = true;
    isValid &= validation.checkNumber(luongCoBan.value, 'tbLuongCB', 'Lương cơ bản phải là số') &&
    validation.checkLuongCB(luongCoBan.value, 'tbLuongCB', 'Lương cơ bản 1 000 000 - 20 000 000')
}   
getEle('datepicker').onchange = function () {
    var isValid = true;
    isValid &= validation.checkEmpty(ngayLam.value, 'tbNgay', 'Ngày làm không được để trống')&&
    validation.checkDate(ngayLam.value, 'tbNgay', 'Ngày phải đúng định dạng')
}
getEle('datepicker').onkeyup = function () {
    var isValid = true;
    isValid &= validation.checkEmpty(ngayLam.value, 'tbNgay', 'Ngày làm không được để trống')&&
    validation.checkDate(ngayLam.value, 'tbNgay', 'Ngày phải đúng định dạng')
}
getEle('chucvu').onchange = function () {
    var isValid = true;
    isValid &= validation.checkSelect('chucvu', 'tbChucVu', 'Chức vụ phải chọn chức vụ hợp lệ')
}
getEle('gioLam').onkeyup = function () {
    var isValid = true;
    isValid &= validation.checkNumber(gioLam.value, 'tbGiolam', 'Giờ làm phải là số') &&
        validation.checkGioLam(gioLam.value, 'tbGiolam', 'Số giờ làm trong tháng 80 - 200 giờ')
}
// Thêm nhân viên 
function themNhanVien() {
    var isValid = true;
    // Check tài khoản
    isValid &= validation.checkEmpty(taiKhoan.value, 'tbTKNV', 'Tên tài khoản không được để trống') &&
    validation.checkID(taiKhoan.value, 'tbTKNV', 'Tên tài khoản đã tồn tại', danhSachNV.mangNhanVien);
    // Check name
    isValid &= validation.checkEmpty(hoTen.value, 'tbTen', 'Tên nhân viên không được để trống') &&
        validation.checkName(hoTen.value, 'tbTen', 'Tên nhân viên phải là chữ')
    // Check email
    isValid &= validation.checkEmpty(email.value, 'tbEmail', 'Email không được để trống') &&
        validation.checkEmail(email.value, 'tbEmail', 'Email phải đúng định dạng')
    // Check pass
    isValid &= validation.checkEmpty(matKhau.value, 'tbMatKhau', 'Mật khẩu không được để trống') &&
        validation.checkPass(matKhau.value, 'tbMatKhau', 'Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)')
    // Check date
    isValid &= validation.checkEmpty(ngayLam.value, 'tbNgay', 'Ngày làm không được để trống') &&
    validation.checkDate(ngayLam.value, 'tbNgay', 'Ngày phải đúng định dạng')
    // Check lương cơ bản
    isValid &= validation.checkEmpty(luongCoBan.value, 'tbLuongCB', 'Lương cơ bản không được để trống') &&
        validation.checkNumber(luongCoBan.value, 'tbLuongCB', 'Lương cơ bản phải là số') &&
        validation.checkLuongCB(luongCoBan.value, 'tbLuongCB', 'Lương cơ bản 1 000 000 - 20 000 000')
    // Check Chức vụ
    isValid &= validation.checkSelect('chucvu', 'tbChucVu', 'Chức vụ phải chọn chức vụ hợp lệ')
    // Check giờ làm
    isValid &= validation.checkEmpty(gioLam.value, 'tbGiolam', 'Giờ làm không được để trống') &&
    validation.checkNumber(gioLam.value, 'tbGiolam', 'Giờ làm phải là số') &&
        validation.checkGioLam(gioLam.value, 'tbGiolam', 'Số giờ làm trong tháng 80 - 200 giờ') ;

    if (isValid) {
        var nhanVien = new NhanVien(taiKhoan.value, hoTen.value, email.value, matKhau.value, ngayLam.value, Number(luongCoBan.value), chucVu.value, gioLam.value);
        nhanVien.tongLuong();
        nhanVien.xepLoai();
        danhSachNV.themNhanVien(nhanVien);
        hienThiTable(danhSachNV.mangNhanVien);
        setLocalStorage(danhSachNV.mangNhanVien);
        resetForm();
    }
}
getEle('btnThemNV').onclick = themNhanVien;
getEle('btnDong').onclick = function () {
    document.querySelectorAll('.sp-thongbao').forEach(function (spanThongBao) {
        spanThongBao.style.display = 'none';
    })
}

// Hiển thị nhân viên ra table
function hienThiTable(mangNV) {
    var tBody = getEle('tableDanhSach');
    var content = '';
    mangNV.map(function (nv, index) {
        var tr = `
                <tr>
                    <td>${nv.taiKhoan}</td>
                    <td>${nv.hoTen}</td>
                    <td>${nv.email}</td>
                    <td>${nv.ngayLam}</td>
                    <td>${nv.chucVu}</td>
                    <td>${nv.tongLuong}</td>
                    <td>${nv.xepLoai}</td>
                    <td>
                    <button class="btn btn-danger my-2" onclick="xoaNhanVien('${nv.taiKhoan}')">Xóa</button>
                    <button id="btnXem" data-toggle="modal" data-target="#myModal" class="btn btn-info" onclick="xemNhanVien('${nv.taiKhoan}')" >Xem</button>
                    </td>
                </tr>
        `
        content += tr;

    })
    tBody.innerHTML = content;
}

// Xóa nhân viên 
function xoaNhanVien(taiKhoan) {
    danhSachNV.xoaNhanVien(taiKhoan);
    setLocalStorage(danhSachNV.mangNhanVien);
    hienThiTable(danhSachNV.mangNhanVien);
}

// Xem nhân viên 
function xemNhanVien(taiKhoan) {
    var viTri = danhSachNV.timviTri(taiKhoan);
    if (viTri != -1) {
        goiModal('Cập nhật nhân viên', true, 'capnhat');
        var nv = danhSachNV.mangNhanVien[viTri];
        getEle('tknv').value = nv.taiKhoan;
        getEle('name').value = nv.hoTen;
        getEle('email').value = nv.email;
        getEle('password').value = nv.matKhau;
        getEle('datepicker').value = nv.ngayLam;
        getEle('luongCB').value = nv.luongCoBan;
        getEle('chucvu').value = nv.chucVu;
        getEle('gioLam').value = nv.gioLam;
    } else {
        console.log('Không tìm thấy sinh viên cần xem');
    }
}

// Cập nhật nhân viên
function capNhatNhanVien() {
    var taiKhoan = getEle('tknv').value;
    var hoTen = getEle('name').value;
    var email = getEle('email').value;
    var matKhau = getEle('password').value;
    var ngayLam = getEle('datepicker').value;
    var luongCoBan = getEle('luongCB').value;
    var chucVu = getEle('chucvu').value;
    var gioLam = getEle('gioLam').value;

    var isValid = true;
    // Check tài khoản
    isValid &= validation.checkEmpty(taiKhoan, 'tbTKNV', 'Tên tài khoản không được để trống') 
    // Check name
    isValid &= validation.checkEmpty(hoTen, 'tbTen', 'Tên nhân viên không được để trống') &&
        validation.checkName(hoTen, 'tbTen', 'Tên nhân viên phải là chữ')
    // Check email
    isValid &= validation.checkEmpty(email, 'tbEmail', 'Email không được để trống') &&
        validation.checkEmail(email, 'tbEmail', 'Email phải đúng định dạng')
    // Check pass
    isValid &= validation.checkEmpty(matKhau, 'tbMatKhau', 'Mật khẩu không được để trống') &&
        validation.checkPass(matKhau, 'tbMatKhau', 'Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)')
    // Check date
    isValid &= validation.checkEmpty(ngayLam, 'tbNgay', 'Ngày làm không được để trống') &&
    validation.checkDate(ngayLam, 'tbNgay', 'Ngày phải đúng định dạng')
    // Check lương cơ bản
    isValid &= validation.checkEmpty(luongCoBan, 'tbLuongCB', 'Lương cơ bản không được để trống') &&
        validation.checkNumber(luongCoBan, 'tbLuongCB', 'Lương cơ bản phải là số') &&
        validation.checkLuongCB(luongCoBan, 'tbLuongCB', 'Lương cơ bản 1 000 000 - 20 000 000')
    // Check Chức vụ
    isValid &= validation.checkSelect('chucvu', 'tbChucVu', 'Chức vụ phải chọn chức vụ hợp lệ')
    // Check giờ làm
    isValid &= validation.checkEmpty(gioLam, 'tbGiolam', 'Giờ làm không được để trống') &&
    validation.checkNumber(gioLam, 'tbGiolam', 'Giờ làm phải là số') &&
        validation.checkGioLam(gioLam, 'tbGiolam', 'Số giờ làm trong tháng 80 - 200 giờ') ;
    if(isValid ){
        var nhanVien = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, Number(luongCoBan), chucVu, gioLam);
        nhanVien.tongLuong();
        nhanVien.xepLoai();
        danhSachNV.capNhatNhanVien(nhanVien);
        setLocalStorage(danhSachNV.mangNhanVien);
        hienThiTable(danhSachNV.mangNhanVien);
        getEle('myModal').style.display = 'none';
        document.querySelector('.modal-backdrop.show').style.display = 'none';

    }
}
getEle('btnCapNhat').onclick = capNhatNhanVien;

// Tìm nhân viên theo xếp loại
function timNVTheoXepLoai() {
    var loaiNV = getEle('searchName').value;
    var mangTimKiem = danhSachNV.timNhanVienTheoLoai(loaiNV);
    hienThiTable(mangTimKiem);
}
getEle('searchName').onkeyup = timNVTheoXepLoai;
getEle('btnTimNV').onclick = timNVTheoXepLoai;
// Set localStorage
function setLocalStorage(mangNv) {
    localStorage.setItem('DSNV', JSON.stringify(mangNv))
}

// Get localStorage
function getLocalStorage() {
    if (localStorage.getItem('DSNV') != null) {
        danhSachNV.mangNhanVien = JSON.parse(localStorage.getItem('DSNV'))
        hienThiTable(danhSachNV.mangNhanVien);
    }
}

// Reset form
function resetForm() {
    getEle('form').reset();

}