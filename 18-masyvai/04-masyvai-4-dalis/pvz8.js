let pradiniai = [7, 8, 3, 2, 4]
let surikiuoti = pradiniai.slice().sort()
// let kitaKryptim = pradiniai.slice().sort().reverse()
let kitaKryptim = surikiuoti.slice().reverse()

console.log('pradiniai', pradiniai)
console.log('surikiuoti:', surikiuoti)
console.log('surikiuoti kita kryptimi:', kitaKryptim)