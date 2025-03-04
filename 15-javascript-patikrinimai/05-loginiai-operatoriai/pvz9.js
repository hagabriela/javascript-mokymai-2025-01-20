// nustatyti ar žmogus NĖRA iš Vilniaus ar Kauno

let miestas = 'Klaipėda'

if (miestas == 'Vilnius' || miestas == 'Kaunas') {
    console.log('yra iš didžiojo miesto');
} else {
    console.log('nėra iš didžiojo miesto');
}

if (!(miestas == 'Vilnius' || miestas == 'Kaunas')) {
    console.log('nėra iš didžiojo miesto');
} else {
    console.log('yra iš didžiojo miesto');
}

if (miestas != 'Vilnius' && miestas != 'Kaunas') {
    console.log('nėra iš didžiojo miesto');
} else {
    console.log('yra iš didžiojo miesto');
}