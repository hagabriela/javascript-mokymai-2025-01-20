let miestai = ['Vilnius' , 'Kaunas' , 'Klaipėda' , 'Marijampolė' , 'Šiauliai' , 'Panevėžys']

for (const indeksas in miestai) {
   console.log(`${parseInt(indeksas) + 1}-as miestas yra ${miestai[indeksas]}`);
}