let kainos = [30, 5, 18, 20, 26, 17]

// kainos.sort() vienzankliams tinka, bet dvizenkliams ne, nes pagal pirma skaiciu rikiuoja

//ARBA
// kainos.sort((a, b) => a - b)

//ARBA
kainos.sort((pirmas, antras) => {
    if (pirmas > antras) {
        return 1
    } else if (antras > pirmas) {
        return -1
    } else {
        return 0
    }
})

console.log(kainos);
