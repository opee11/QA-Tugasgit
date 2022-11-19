const nama = ['Abigainl','Alexandra','Alison','Amanda','Angela','Bellac','Carol',
'Caroline','carolyn','Deirdre','Diana','Elizabeth','Ella','Faith','Olivia','Penelope'];
function filternama(arr, query) {
  return arr.filter((nama1) => nama1.toLowerCase().includes(query.toLowerCase()));
  }
  console.log(filternama(nama,'an'));


