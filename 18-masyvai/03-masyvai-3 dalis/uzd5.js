// Susikurkite masyvą failų pavadinimams saugoti, užpildykite jį duomenimis. Jums reikės nuskaityti šiuos failus, todėl pirma norėsite patikrinti su kuriais galite dirbti. Išveskite į ekraną tik tuos failus, kurių galūnė yra .txt arba .json tipo.

let failai = ['.txt' , '.json' , '.pdf' , '.html' , '.css']

console.log('Tinkami failai:');

for (const failas of failai) {
    if (failas == '.txt' || failas == '.json') {
        console.log(failas);
    }
}