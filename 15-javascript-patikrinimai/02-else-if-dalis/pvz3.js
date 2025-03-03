let amzius = 68

// priskirkite žmogų prie vienos iš nurodytų amžių grupių:
// - vaikas (iki 12 metų)
// - paauglys (iki 18 metų)
// - suaugęs (iki 60 metų)
// - senjoras (60 ir daugiau metų)

if (amzius < 12) {
    console.log('Vaikas');
} else if (amzius < 18) {
    console.log('Paauglys');
} else if (amzius < 60) {
    console.log('Suaugęs');
} else if (amzius >= 60) {
    console.log('Senjoras');
}
