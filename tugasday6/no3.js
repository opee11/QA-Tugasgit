let komedi = "tertawa"
const suara= new Promise((resolve, reject) => {
    setTimeout(() => {
        if (komedi === "tertawa") {
            resolve("Penonton terhibur")
        }  else {
            reject("Penonton kecewa")
        }
    }, 2000)
})

suara.then(keterangan => {
    console.log(keterangan)
}).catch(sedih =>{
    console.log(sedih)
})

// contoh ke2
let lapar = "makan"
const nasi= new Promise((resolve, reject) => {
    setTimeout(() => {
        if (lapar === "makan") {
            resolve("perut kenyang")
        }  else {
            reject("kelaparan")
        }
    }, 2000)
})

nasi.then(Selesai => {
    console.log(Selesai)
}).catch(err =>{
    console.log(err)
})
