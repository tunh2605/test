function checkValid(event){
    event.preventDefault();
    var ckSdt = document.getElementById("sdt").value;
    var ckEmail = document.getElementById("email").value;

    const Sdt = /^(03|05|07|08|09)\d{8}$/;
    const Email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z0-9]{2,6}$/;

    if( ckEmail === ""){
        alert("Vui long nhap Email !");
        return;
    }
    if( ckSdt === ""){
        alert("Vui long nhap so dien thoai !");
        return;
    }
    if( !Sdt.test(ckSdt)){
        alert("Sai dinh dang so dien thoai !");
        return;
    }
    if( !Email.test(ckEmail)){
        alert("Sai dinh dang Email !");
        return
    }
    alert("Thanh cong !");
}