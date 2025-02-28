let amzius = 25
let pinigai = 2

if (amzius >= 18) {
    console.log('Jūs turite teisę įeiti į klubą');
    
    if (pinigai >= 5) {
        console.log('Jūs turite pakankamai pinigų, kad nusipirktumėte bilietą');
    }

    if (pinigai < 5) {
        console.log('Jums trūksta pinigų bilietui');
    }
}