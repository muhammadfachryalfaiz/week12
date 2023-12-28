// buat fungsi
// ambil nilai username
// ambil nilai password
// kitacek apakah username dan password benar dengan yang kita tentukan nilainya
// jika benar berikan alert berhasil login dan arhakan ke file index
// jika password dan username kosong
// maka berikan alert password dan username kosong
// jika password dan username salah 
// tampilkan username dan password salah
// jika codingan error maka tutup laptop

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "123456") {
        alert("Berhasil Login");
        window.location="index.html";
        return false;
    }
    else if (username == "" || password == ""){
        alert("Username atau Password tidak boleh kosong");
    }
    else {
        alert("Username atau Password Salah");
    }
}