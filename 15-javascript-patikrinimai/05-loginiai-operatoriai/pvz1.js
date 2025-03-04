// ar darbuotojas uždirba tarp 1000 ir 2000? ar kitą sumą?

let atlyginimas = 1500

if (atlyginimas >= 1000) {
    if (atlyginimas <= 2000) {
        console.log('taip')
    } else {
        console.log('ne')
    }
} else {
    console.log('ne')
}

// arba kitaip:

if (atlyginimas >= 1000 && atlyginimas <= 2000) {
    console.log('taip');
} else {
    console.log('ne');
}