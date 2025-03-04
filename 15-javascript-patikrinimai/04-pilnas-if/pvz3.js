let pazymys = -4

if (pazymys < 0) {
    console.log('KLAIDA! Pažymys negali būti neigiamas');
} else if (pazymys > 10) {
    console.log('KLAIDA! Pažymys negali būti didesnis nei 10'); 
} else if (pazymys < 4) {
    console.log('Upsy, jūsų pažymys yra neigiamas, reikės perlaikyti');
} else if (pazymys <= 9) {
    console.log('Mokotės neblogai');
} else {
    console.log('Esate superinis studentas');
}