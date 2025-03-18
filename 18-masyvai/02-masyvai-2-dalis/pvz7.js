let ugiai = [1.75, 1.82, 1.67, 1.73]

let suma = 0

for (let i = 0; i < ugiai.length; i++) {
    // console.log(ugiai[i]);
    suma += ugiai[i]
}

let vidurkis = suma / ugiai.length

console.log(vidurkis.toFixed(2));
