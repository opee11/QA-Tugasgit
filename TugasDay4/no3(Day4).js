
var lower = 5;
var upper = 20;
var angka = [2,25,17,14,20,8,30];
angka.sort(function(a, b) {
    return a - b;
});
var output = angka.filter(function(hasil) {
return (hasil > lower && hasil < upper);
  
});
console.log(output);



