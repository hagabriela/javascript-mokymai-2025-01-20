function isvedimas() {
    console.log('=============');
    console.log('Skaičiavimai');
    console.log('=============');
    suma()
    console.log('=============');
    didesnis()
    console.log('=============');
}

function suma() {
    let pirmas = 17
    let antras = 14
    console.log(`${pirmas} + ${antras} = ${pirmas + antras}`);
}

// f-ja mato tik savo koda, todel galima pakartoti kintamuosius
function didesnis() {
    let pirmas = 17
    let antras = 14

    if (pirmas > antras) {
        console.log('Didesnis yra', pirmas);
    } else if (antras > pirmas) {
        console.log('Didesnis yra', antras);
    } else {
        console.log('Skaičiai yra lygūs');
    }
}

isvedimas()
// kadangi sis yra pabaigoje, tai nieko, kad suma() ir didesnis () 
// yra pries suma() ir didesnis() f-ja