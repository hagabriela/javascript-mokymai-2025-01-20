let role = 'moderatorius'

if (role == 'admin') {
    console.log('leisti viską');
} else if (role == 'moderatorius') {
    console.log('gali viską matyti, administruoti įrašus');
} else if (role == 'vartotojas') {
    console.log('gali žiūrėti turinį');
}
// cia tinka ir tiesiog if, nes vis tiek tik 1 teisingas ats yra, bet neapkraunam programos