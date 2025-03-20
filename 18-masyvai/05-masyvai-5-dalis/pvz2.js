let vardai = ['Jonas' , 'Petras', 'Ona', 'Birutė']

vardai.forEach((vardas, indeksas) => {
    console.log(indeksas, vardas);
})

vardai.forEach((vardas, i) => {
    console.log(`${i+1}-as ${vardas}`);
})

vardai.forEach(function (vardas, i) {
    console.log(`${i+1}-as ${vardas}`);
})