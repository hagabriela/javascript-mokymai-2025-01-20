let valstybes = {
    LT: 'Vilnius',
    LV: 'Ryga',
    EE: 'Talinas'
}

for (const valstybe in valstybes) {
    console.log(`${valstybe} sostinė yra ${valstybes[valstybe]}`);   
}
