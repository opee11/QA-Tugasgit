//QA BATCH 2 -MOH RIVAI AL RASYID
//Mencari Nilai MAX MIN
let bulat = [1, 2, 3, 4, 5]
let max = bulat[0]
let min = bulat[0]
let maxsum = 0;
let minsum = 0;
for (i=0; i<bulat.length; i++){
    if(bulat[i]>max){
        max = bulat[i]; 
    }
    if(bulat[i]<min){
        min=bulat[i];
}
}
for (j=0; j<bulat.length; j++){
    if(bulat[j]< max){
        minsum = minsum + bulat[j]; 
    }
    if(bulat[j]>min){
        maxsum = maxsum + bulat[j];
}
}
console.log(minsum + ","+ maxsum)

//NO.2 Mencarii bilangan prima
let bilangan = 6, cek=0;
for (let i=1; i<=bilangan; i++){
    if(bilangan%i==0){
        cek++;
    }
    }
    if(cek==2){
        console.log("Bilangan " + bilangan+" adalah Prima")
    }else{
        console.log("Bilangan "+bilangan+" Bukan Prima")
    }