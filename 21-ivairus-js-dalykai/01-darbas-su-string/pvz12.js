const messageToTrim = '          some text          ';

console.log(messageToTrim);

console.log('.' + messageToTrim.trim() + '.'); // apkarpys iš abiejų pusių
console.log('.' + messageToTrim.trimStart() + '.'); // apkarpys iš kairės
console.log('.' + messageToTrim.trimEnd() + '.'); // apkarpys iš dešinės