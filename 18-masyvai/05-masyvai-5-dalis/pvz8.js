let skaiciai = [7, 4, 6, 3, 5]
console.log(skaiciai);

let paragrafai = skaiciai.map(skaicius => `<p>${skaicius}</p>`)
console.log(paragrafai);

let html = paragrafai.join('')
console.log(html);

