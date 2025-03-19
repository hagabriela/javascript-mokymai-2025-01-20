// pasitestuoti push, pop, shift, unshift, splice
// su kitokiais duomenimis (pvz, pažymiais, šalimis, vardais, ...)

let pazymiai = [10, 8, 9]
console.log('Pradiniai pažymiai:' , pazymiai);

pazymiai.push(10)
console.log('Pridėtas 10-tukas:' , pazymiai);

pazymiai.unshift(5, 2)
console.log('Pridėti pradžioje 5 ir 2' , pazymiai);

pazymiai.pop()
console.log('Atimtas paskutinis pažymys:' , pazymiai);

pazymiai.shift()
pazymiai.shift()
console.log('Atimtas pirmieji du pažymiai:' , pazymiai);

pazymiai.splice(1, 0, 8, 9, 10)
console.log('Į vidurį pridėta 8, 9, 10:' , pazymiai);

pazymiai.splice(1, 2)
console.log('Viduryje nutrinta:' , pazymiai);

