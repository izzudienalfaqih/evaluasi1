// 1. Tipe Data
// Jelaskan perbedaan antara tipe data number, string, dan boolean dalam JavaScript.
//  Berikan contoh untuk masing-masing tipe data tersebut.

// jawab : 
// number = tipe data yg berupa angka
var number = 1
// string = tipe data yg berupa karakter " "
var string = "izzudien"
// boolean = tipe data yg menghasilkan true atau false
var bool = true
var bool2 = false


//2. Variabel
// Apa itu variabel dalam JavaScript? Jelaskan perbedaan antara var, let, dan const.
//  beserta contoh penggunaan masing-masing.

//jawab :
// variable adalah sebuah wadah yg berisi value berupa tipe data
// var hanya untuk variable saja
var saya = "izzudien"
let dia = "andi"



//3. Operator Aritmatika
// Buatlah kode JavaScript yang melakukan operasi penjumlahan, pengurangan, perkalian, dan pembagian dari dua angka yang ditentukan dalam variabel.
//  Jelaskan hasil dari setiap operasi.

//jawab :
var nilai1 = 8
var nilai2 = 4
//setiap operator yg telah ditentukan untuk mengoperasikan keduan variable, maka dia akan melakukan sesuai tugasnya
// + - * / %
// seperti + maka dia akan menambahkan kedua variable yg telah di tentukan, dsb 
var penjumlahan= nilai1 + nilai2
var pengurangan= nilai1 - nilai2
var perkalian = nilai1 * nilai2
var pembagian = nilai1 / nilai2

console.log(penjumlahan)
console.log(pengurangan)
console.log(perkalian)
console.log(pembagian)


//4. Operator Penugasan
// Apa yang dimaksud dengan operator penugasan dalam JavaScript?
//  Berikan contoh kode yang menggunakan operator penugasan untuk mengupdate nilai variabel.

//jawab : 
//operator yg menugaskan suatu opearsi kepada variable
//+= -= *= /= %=
var nilai3 = 12
nilai3 += 2
nilai3 *= 2
//kenapa hasilnya 28 ? karena setelah nilai3 ditambah dengan 2, maka langsung dikali dengan 2. tidak satu-satu(langsung)
console.log(nilai3)


//5.Operator Logika
// Jelaskan bagaimana operator logika bekerja dalam JavaScript. 
// Berikan contoh penggunaan operator logika AND, OR, dan NOT dalam pernyataan.

//jawab :
//sistem operasi yg berupa logika pemrograman
// || jika salah satu dari kondisi ada yg true, maka hasilnya akan true
console.log(true || true)
console.log(false || true)
// && ini kebalikan dari or, jika salah satu kondisi ada yg false, makahasilnya akan false
console.log(true && true)
console.log(false && true)
// ! (not) operasi ini untuk kebalikan dari sebuah nilai
console.log(!true)
console.log(!false)


//6.Pengkondisian (if, else if, else)
// Tulis kode JavaScript menggunakan struktur pengkondisian if, else if, dan else untuk mengecek apakah sebuah angka adalah genap atau ganjil. 
// Jelaskan alur logika yang digunakan.

// jawab :
var namaSaya = prompt("masukan nama saya !! ")
if(namaSaya == "izzudien" ) {
    alert("yaa itu nama depan saya")
}//if ini adalah untuk jawaban kita yg benar. jika kita menulisnya benar, maka akan muncul kata yg tlah ditentukan
else if(namaSaya == "al faqih"){
    alert("yaa itu nama belakang saya")
}//else if ini adalah jawaban yg bener lainnya. jika kita menulisnya benar, maka akan muncul kata yg tlah ditentukan
else{
    alert("anda belum memasukan nama saya")
}// kalo else adalah jawaban yg salah


//7.Pengkondisian (switch)
// Buatlah contoh penggunaan pernyataan switch untuk menentukan nama hari berdasarkan nomor hari (1-7). 
// Misalnya, 1 adalah "Senin", 2 adalah "Selasa", dan seterusnya.

//jawab :
var hari1 = "senin"
var hari2 = "selasa"
var hari3 = "rabu"
var hari4 = "kamis"
var hari5 = "jumat"
var hari6 = "sabtu"
var hari7 = "minggu"

var ke =prompt("masukan hari : ke1, ke2, ke3, ke4, ke5, ke6, ke7 ")

switch (ke) {
    case "ke1":
        alert(hari1)
        break;
     case "ke2":
        alert(hari2)
        break;
     case "ke3":
         alert(hari3)
         break;
    case "ke4": 
        alert(hari4)
        break;
    case "ke5":
        alert(hari5)
        break;
     case "ke6":
        alert(hari6)
        break;
    case "ke7":
        alert(hari7)
        break;
    default:
        alert("anda belum memasukan hari ke")
        break;
}


// 8.Perulangan (for)
// Tulis kode JavaScript menggunakan perulangan for untuk mencetak angka dari 1 sampai 10 ke konsol. 
// Jelaskan bagaimana perulangan tersebut bekerja.

//jawab : 
var x = 1
var jumlah = 10
// x(1) lebih kecil sama dengan dari jumlah(10), dan x akan ditambahkan(increment) sampai mencapai 10,
// kalo sudah melebihi 10 maka loopingnya akan berhenti 
for (x ; x<= jumlah ; x++) {
    console.log(x)
}


//9.Operator Perbandingan
//Jelaskan perbedaan antara operator perbandingan == dan === dalam JavaScript. 
//Berikan contoh situasi di mana masing-masing operator dapat memberikan hasil yang berbeda.

//jawab :
//kalo == hanya melihat nilainya saja, tidak melihat tipe data nya
// sedangkan === melihat nilai dan juga tipe datanya
var nilai4 = 10
var nilai5 = "10"

console.log(nilai4 == nilai5)
console.log(nilai4 === nilai5)
    

//10.Kombinasi Tipe Data dan Operator
// Buatlah kode JavaScript yang menggabungkan string dan angka, kemudian jelaskan hasilnya. 
// Apa yang terjadi ketika Anda mencoba menggabungkan tipe data yang berbeda?

//jawab :
var nilai6 = 7 //number
var nilai7 = "3" //string
var nilai8 = 3 //number

//jika kita mengoperasikan 2 tipe data, maka itu hanya di gabungkan saja
console.log(nilai6 + nilai7)
//jika kita mengoperasikan 1 tipe data, maka itu akan dioperasikan sesuai dengan operator nya
console.log(nilai6 + nilai8)
