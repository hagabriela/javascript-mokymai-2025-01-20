let skaiciai = [7, 1, -4, 5, -3, 5, 2, -1]

let teigiami = []

for (const skaicius of skaiciai) {
    if (skaicius > 0) {
        teigiami.push(skaicius)
    }
}

console.log(teigiami);

let teigiami2 = skaiciai.filter((skaicius) => {
    return skaicius > 0
})

console.log(teigiami2);

let teigiami3 = skaiciai.filter(skaicius => skaicius > 0)
// let teigiami3 = skaiciai.filter(sk => sk > 0)
console.log(teigiami3);

// mūsų forof ciklo pavyzdys ir šitas filter daro visiškai tą patį

// kai naudojame forEach - jokio return niekur rašyti mums nereikia,
// bet jeigu naudojame filter, find, some, every, ... ir kitas panašias
// funkcijas, tai mums reikia return, kad iškomunikuoti kokie tiksliai
// rezutlatai mums tinka

// return galima išvengti ir nerašyti, kai nenaudojame { } skliaustų,
// t.y. kai kodas lieka toje pačioje eilutėje
// .filter(... => { return ... })
// .filter(... => ... )