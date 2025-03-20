let pazymiai = [9, 8, 2, 3, 7, 4, 5]
console.log(pazymiai);

//ar yra bent vienas 10?

let bentVienas10 = pazymiai.some(pazymys => pazymys == 10)
console.log('Ar yra bent vienas 10?', bentVienas10 ? 'taip' : 'ne');

// if (bentVienas10 == true)
if (bentVienas10) {
    console.log('Yra bent vienas 10-ukas')
} else {
    console.log('Nėra nei vieno 10-uko.')
}

if (pazymiai.some(pazymys => pazymys == 10)) {
    console.log('Yra bent vienas 10-ukas')
} else {
    console.log('Nėra nei vieno 10-uko.')
}

// ar visi pažymiai yra teigiami?

let arVisiTeigiami = pazymiai.every(pazymys => pazymys >= 5)

if (arVisiTeigiami) {
    console.log('Visi pažymiai yra teigiami')
} else {
    console.log('Yra bent vienas pažymys neigiamas')
}

// ar yra bent vienas 5?

if (pazymiai.some(p => p == 5)) {
    console.log('Yra bent vienas 5-etas.')
} else {
    console.log('Nėra nei vieno 5-eto.')
}

// ar visi pažymiai yra didensi ar lygūs nei 7?

let arVisiLinkDidesniu = pazymiai.every(pazymys => pazymys >= 7)
console.log('Ar visi pažymiai yra didesni ar lygūs nei 7?', arVisiLinkDidesniu)

// ar yra bent vienas pažymys lygus ar didesnis 8?

let arYra8arDaugiau = pazymiai.some(pazymys => pazymys >= 8)
console.log('Ar yra bent vienas pažymys lygus ar didesnis 8?', arYra8arDaugiau)