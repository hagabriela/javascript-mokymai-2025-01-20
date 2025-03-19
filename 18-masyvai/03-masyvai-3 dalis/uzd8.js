// Susikurkite masyvą sandėlio likučiams saugoti (kiekvienas atskiras narys masyve yra atskiros prekės likutis). Su kiekvienu likučiu paskaičiuokite per kiek dienų bus išpirktas, jei per dieną vidutiniškai yra nuperkami 5 vnt. Išveskite atsakymus atskirose eilutėse, nurodant kiek yra dabar ir kiek dienų užteks jo. Pavyzdžiui, jeigu yra likučiai 74, 54 ir 32, tai 74 vnt. prekės užteks maždaug 15 dienų, 54 vnt. prekės užteks maždaug 11 dienų ir t.t.

let likuciai = [74, 54, 32]

let vidutiniskaiNuperkama = 5 // per dieną

for (const likutis of likuciai) {
    console.log('Dabartinis likutis:' , likutis);
    console.log('Likučio užteks' , (likutis / vidutiniskaiNuperkama).toFixed(0) , 'dienų');
}
