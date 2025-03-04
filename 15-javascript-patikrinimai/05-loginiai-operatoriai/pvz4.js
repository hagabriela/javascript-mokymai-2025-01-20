// žmogus ieško buto, nori kad būtų atitinkamas kvadratų kiekis,
// bei kad nuomos kaina mėnesiui būtų tam tikrose ribose

// žmogaus filtrai:

let filtrasKvadrataiNuo = 60
let filtrasKainaNuo = 500
let filtrasKainaIki = 700

// NT pasiūlmas:

let kvadratai = 80
let kaina = 700

if (kvadratai >= filtrasKvadrataiNuo && kaina >= filtrasKainaNuo && kaina <= filtrasKainaIki) {
    console.log('NT pagal filtrus TINKA');
} else {
    console.log('NT pagal filtrus NETINKA');
}

// kvadratai >= filtrasKvadrataiNuo && kaina >= filtrasKainaNuo && kaina <= filtrasKainaIki
// 80 >= 60 && 700 >= 500 && 700 <= 700
// TRUE && 700 >= 500 && 700 <= 700
// TRUE && TRUE && 700 <= 700
// TRUE && TRUE && TRUE
// TRUE