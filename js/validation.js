function Validation() {
    this.checkEmpty = function (value, spanID, message) {
        if (value.trim() != '') {
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = '';
            return true;
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = message;
        return false;
    }
    this.checkID = function(value, spanID, message,mangNV) {
        var isExist = false;
        isExist = mangNV.some(function(sv){
           return sv.taiKhoan == value;
        });
        if(isExist) {
            document.getElementById(spanID).style.display = 'block';
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
        document.getElementById(spanID).style.display = 'none';
        document.getElementById(spanID).innerHTML = '';
        return true;
    }
    this.checkName = function(value,spanID, message) {
        var patternString = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$"
        var pattern = new RegExp(patternString);
        if(pattern.test(value)){
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = '';
            return true;
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = message;
        return false;
    }   
    this.checkEmail = function(value, spanID, message){
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(value.match(pattern)){
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = '';
            return true;
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = message;
        return false;
        
    }
    this.checkPass = function(value, spanID, message){
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if(value.match(pattern)){
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = '';
            return true;
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = message;
        return false;
    }
    this.checkDate = function(value, spanID, message){
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if(value.match(pattern)){
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = '';
            return true;
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = message;
        return false;
    }
    this.checkNumber = function(value, spanID, message){
        var pattern = /^[0-9]+$/;
        if(value.match(pattern)){
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = '';
            return true;
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = message;
        return false;
    }
    this.checkLuongCB = function(value, spanID, message){
        if(value >= 1000000 && value <= 20000000){
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = '';
            return true;
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = message;
        return false;
    }
    this.checkSelect = function(selectID, spanID, message){
        
        if(document.getElementById(selectID).selectedIndex != 0){
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = '';
            return true;
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = message;
        return false;
    }
    this.checkGioLam = function(value, spanID, message){
        if(value >= 80 && value <= 200){
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = '';
            return true;
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = message;
        return false;
        
    }
}