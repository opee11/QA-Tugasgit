const cekHariKerja =(day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek){
                resolve(cek)
            }
            else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

cekHariKerja('selasa').then(keterangan => {
    console.log(keterangan)
}).catch(bukanharikerja =>{
    console.log(bukanharikerja)
})