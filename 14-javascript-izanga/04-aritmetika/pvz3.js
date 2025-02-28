let rida = 150000
let kuroSanaudos = 7.5 // 1/100km
let metai = 2010

// kiek vidutiniškai automobilis prasuko km per metus?
let vidutiniskaiKmPerMetus = rida / (2025 - metai)
console.log('Vidutiniškai per metus nuvažiavo' , vidutiniskaiKmPerMetus, 'km');
console.log('Vidutiniškai per metus nuvažiavo' , rida / (2025 - metai), 'km');

// kiek vidutiniškai kuro sąnaudų turėjo per metus?
console.log(vidutiniskaiKmPerMetus / 100 * kuroSanaudos, 'l');

