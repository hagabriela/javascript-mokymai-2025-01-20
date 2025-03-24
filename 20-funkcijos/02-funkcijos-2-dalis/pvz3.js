function mazesnis(sk1, sk2) {
    if (sk1 < sk2) {
        console.log(`${sk1} yra mažesnis nei ${sk2}`);
    } else if (sk1 > sk2) {
        console.log(`${sk2} yra mažesnis nei ${sk1}`);
    } else {
        console.log(`${sk1} ir ${sk2} yra lygūs`);
    }
}

mazesnis(14, 10)
mazesnis(7, 12)
mazesnis(4, 4)

let skaicius1 = 8
let skaicius2 = 10

mazesnis(skaicius1, skaicius2)

let sk1 = 4
let sk2 = 5

mazesnis(sk1, sk2)
