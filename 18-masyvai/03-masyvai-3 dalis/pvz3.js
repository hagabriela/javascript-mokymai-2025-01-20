let pazymiai = [10, 10, 9, 9, 2, 7, 3, 8, 9]

console.log('Neigiami pažymiai');

for (const pazymys of pazymiai) {
    if (pazymys < 5) {
        console.log('-' , pazymys);   
    }
}