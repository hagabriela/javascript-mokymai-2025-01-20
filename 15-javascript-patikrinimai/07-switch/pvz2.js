let savaitesDiena = 'monday' // monday, tuesday, wednesday, thursday...

switch (savaitesDiena) {
    case 'monday': console.log('pirmadienis'); break;
    case 'tuesday': console.log('antradienis'); break;
    case 'wednesday': console.log('trečiadienis'); break;
    case 'thursday': console.log('ketvirtadienis'); break;
    case 'friday': console.log('penktadienis'); break;
    case 'saturday': console.log('šeštadienis'); break;
    case 'sunday': console.log('sekmadienis'); break;
    default: console.log('klaida'); break;
}

if (savaitesDiena == 'monday') {
    console.log('pirmadienis');
} else if (savaitesDiena == 'tuesday') {
    console.log('antradienis');
} // ... 