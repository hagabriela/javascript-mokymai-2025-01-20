// nustatyti ar žmogus yra iš vieno iš didžiųjų miestų
// ar iš kito regiono

let miestas = 'Kaunas'

if (miestas == 'Vilnius' || miestas == 'Kaunas' || miestas == 'Klaipėda') {
    console.log('Žmogus iš didžiojo miesto');
} else {
    console.log('Žmogus yra iš kito regiono');
}

// miestas == 'Vilnius' || miestas == 'Kaunas' || miestas == 'Klaipėda'
// 'Kaunas' == 'Vilnius' || 'Kaunas' == 'Kaunas' || 'Kaunas' == 'Klaipėda'
// FALSE || 'Kaunas' == 'Kaunas' || 'Kaunas' == 'Klaipėda'
// FALSE || TRUE || 'Kaunas' == 'Klaipėda'
// FALSE || TRUE || FALSE
// TRUE
