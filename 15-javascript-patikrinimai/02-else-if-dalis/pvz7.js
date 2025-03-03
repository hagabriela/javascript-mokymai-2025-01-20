let prekiuKaina = 120

if (prekiuKaina == 0) {
    console.log('Nieko neužsisakėte')
} else if (prekiuKaina >= 30) {
    console.log('Galutinė užsakymo kaina:', prekiuKaina)
} else if (prekiuKaina < 30) {
    console.log('Galutinė užsakymo kaina:', prekiuKaina + 3)
}