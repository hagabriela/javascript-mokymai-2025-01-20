let baltijosSalys = ['Lietuva' , 'Latvija', 'Estija']
let skandinavijosSalys = ['Švedija' , 'Norvegija' , 'Suomija' , 'Danija' , 'Islandija']

console.log('Baltijos šalys:' , baltijosSalys);
console.log('Jų kiekis:' , baltijosSalys.length);
console.log();

console.log('Skandinavijos šalys:' , skandinavijosSalys);
console.log('Jų kiekis:' , skandinavijosSalys.length);
console.log();

// Sujungtos vienu metodu
let visosSalys = baltijosSalys.concat(skandinavijosSalys)
// tokiu eiliskumu ir sujunge
console.log('Sujungtos šalys:' , visosSalys);
console.log('Jų kiekis:' , visosSalys.length);
console.log();

let visosSalys2 = [...baltijosSalys, ...skandinavijosSalys]
console.log('Sujungtos šalys:' , visosSalys2);
console.log('Jų kiekis:' , visosSalys2.length);
console.log();

// su concat taip nesigautu
let visosSalys3 = [...baltijosSalys, 'Vokietija', 'Slovėnija',
    ...baltijosSalys, 'Olandija' , 'Ispanija' , ...skandinavijosSalys]
    console.log('Sujungtos šalys:' , visosSalys3);
    console.log('Jų kiekis:' , visosSalys3.length);
    console.log();
