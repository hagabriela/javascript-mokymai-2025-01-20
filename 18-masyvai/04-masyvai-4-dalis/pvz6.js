let salys = ['Lietuva' , 'Latvija' , 'Estija' , 'Vokietija' , 
    'Lenkija' , 'Olandija' , 'Belgija' , 'Prancūzija']

console.log(salys);

console.log(salys[1]);
console.log(salys[3]);

console.log(salys.slice()); // viska nukopijuoja
console.log(salys.slice(2, 5)) // nuo 2 indekso iki 5 indekso, bet 5 neina

console.log(salys.slice(4)) // nuo 4 indekso iki galo

// atskiras masyvas
let pirmiTrys = salys.slice(0, 3)
console.log(pirmiTrys);


