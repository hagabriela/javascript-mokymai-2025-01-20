let diena = 'šeštadienis'

if (diena == 'šeštadienis' || diena == 'sekmadienis') {
    console.log('savaitgalis');
} else {
    console.log('darbo diena');
}

switch (diena) {
    case 'šeštadienis':
    case 'sekmadienis':
        console.log('savaitgalis');
        break;
    default: console.log('darbo diena');
}