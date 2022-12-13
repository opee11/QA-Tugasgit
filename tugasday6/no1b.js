//NO 1b (TRY CATCH)
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
    
    
const cekhari= async() => {
    try {
        const selesai = await cekHariKerja('Sabtu') //try akan menjalankan kondisi if dan catch akan menjalankan parameter eror
        console.log(selesai)
    } catch (bukanharikerja) {
        console.log(bukanharikerja)
    }
}
cekhari()