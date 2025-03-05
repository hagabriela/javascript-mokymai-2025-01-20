let budas = 'kurjeris' // kurjeris, pastomatas
let dydis = 's' // s, m, l

console.log(`Pristatymas: ${budas} (${dydis} dydžio)`);

if (budas == 'kurjeris') {
    switch (dydis) {
        case 's': console.log(3.99); break;
        case 'm': console.log(4.99); break;
        case 'l': console.log(5.99); break;
    }
} else if (budas == 'pastomatas') {
    switch (dydis) {
        case 's': console.log(1.99); break;
        case 'm': console.log(2.99); break;
        case 'l': console.log(3.99); break;
    }
}