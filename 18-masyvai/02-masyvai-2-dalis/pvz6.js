let temperaturos = [17, 10, -5, -8, -1, 2, 3, 9]

for (let i = 0; i < temperaturos.length; i++) {
    // console.log(temperaturos[i]);
    
    if (temperaturos[i] > 0) {
        console.log(`temperatūra ${temperaturos[i]} yra teigiama`);
    } else if (temperaturos[i] < 0) {
        console.log(`temperatūra ${temperaturos[i]} yra neigiama`);
    } else {
        console.log(`temperatūra ${temperaturos[i]} yra lygi 0`);
    }
}