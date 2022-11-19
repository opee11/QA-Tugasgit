// 1. String.prototype.replaceAll()
// Metode replaceAll() mengembalikan string baru dengan semua pola yang cocok diganti dengan pengganti. 
// Polanya bisa berupa string atau RegExp, dan penggantinya bisa berupa string
// atau fungsi yang akan dipanggil untuk setiap kecocokan. String asli dibiarkan tidak berubah.
const buah = 'Mangga itu sangat manis';
console.log(buah.replaceAll('Mangga','Buah'));
//2. String.prototype.toLocaleLowerCase()
//Metode toLocaleLowerCase() mengembalikan nilai string panggilan yang dikonversi ke huruf kecil, sesuai dengan pemetaan kasus khusus lokal.
//3. String.prototype.toLocaleUpperCase() > mengembalikan nilai string panggilan yang dikonversi ke huruf besar sesuai dengan pemetaan
var test = "Belajar JavaScript";
console.log(test.toLocaleLowerCase());
console.log(test.toLocaleUpperCase()); 
//4. Function.prototype.length > objek Fungsi menunjukkan jumlah parameter yang diharapkan oleh fungsi.
function func1(a) {}
function func2(a, b) {}
console.log(func1.length);
console.log(func2.length);
//5. Array.prototype.length > Properti panjang objek Array mewakili jumlah elemen dalam array itu.
const aksesoris = ['gelang', 'cincin', 'kalung'];
console.log(aksesoris.length);
//6. Array.prototype.filter() >membuat salinan dari sebagian array yang diberikan, difilter ke bawah hanya ke elemen dari array yang diberikan yang lulus pengujian yang diimplementasikan oleh fungsi yang disediakan.
const words = ['mangga', 'alpukat', 'jeruk'];

const result = words.filter(word => word.length > 5);
console.log(result);
//7. Array.prototype.find() >mengembalikan elemen pertama dalam array yang disediakan yang memenuhi fungsi pengujian yang disediakan. Jika tidak ada nilai yang memenuhi fungsi pengujian, undefined dikembalikan.
const array1 = ["indramayu", "jakarta selatan", "surabaya"];
const found = array1.find(el => el.length > 10);
console.log(found);
//8. Array.prototype.flat() >membuat array baru dengan semua elemen sub-array digabungkan ke dalamnya secara rekursif hingga kedalaman yang ditentukan.
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
//9. Array.prototype.pop() > menghapus elemen terakhir dari array dan mengembalikan elemen itu. Metode ini mengubah panjang array
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
//10. Array.prototype.concat() > digunakan untuk menggabungkan dua atau lebih array. Metode ini tidak mengubah array yang ada, melainkan mengembalikan array baru.
const a1 = ['a', 'b', 'c'];
const a2 = ['d', 'e', 'f'];
const a3 = a1.concat(a2);
console.log(a3);










