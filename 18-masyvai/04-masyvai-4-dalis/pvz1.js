let miestai = ['Kaunas' , 'Vilnius' , 'Klaipėda']
console.log('pradiniai miestai:' , miestai);

miestai.push('Jonava')
console.log('pridėjus Jonavą' , miestai);

miestai.push('Šiauliai' , 'Panevėžys')
console.log('pridėjus Šiaulius ir Panevėžį:' , miestai);

miestai.unshift('Biržai')
console.log('pridėjus Biržus:' ,  miestai);

miestai.splice(2, 0, 'Utena')
console.log('pridėjus Uteną:' , miestai);

miestai.splice(5, 0, 'Druskininkai' , 'Alytus')
console.log('pridėjus Druskininkus ir Alytų:' , miestai);

miestai.pop()
console.log('pašalinus paskutinį miestą:' , miestai);

miestai.pop()
miestai.pop()
console.log('pašalinus du paskutinius miestus:' , miestai);

miestai.shift()
console.log('pašalinus pirmą miestą:' , miestai);

miestai.splice(3, 2)
console.log('pašalinus du miestus nuo 4 vietos:' , miestai);
// 3 indekso