// alert('labas')

// ================================
// skaiciu-didinimas zona
// ================================

let skaiciuDidinimasMygtukas = document.querySelector('.skaiciu-didinimas button')
// console.log(skaiciuDidinimasMygtukas);

skaiciuDidinimasMygtukas.addEventListener('click' , function() {
    // alert('paspaudei!')
    let skaicius = parseInt(skaiciuDidinimasMygtukas.textContent)
    skaicius++
    // console.log(typeof skaicius, skaicius);
    skaiciuDidinimasMygtukas.textContent = skaicius
})

// ================================
// skaiciu-didinimas zona
// ================================

let didintiPo10Mygtukas = document.querySelector('.didinti-po-10 button')
// console.log(didintiPo10Mygtukas);

didintiPo10Mygtukas.addEventListener('click' , function() {
    // alert('paspaudei!')
    let skaicius = parseInt(didintiPo10Mygtukas.textContent)
    // let skaicius = parseInt(didintiPo10Mygtukas.textContent)+ 10
    skaicius += 10
    // skaicius = skaicius + 10
    // console.log(typeof skaicius, skaicius);
    didintiPo10Mygtukas.textContent = skaicius
    // didintiPo10Mygtukas.textContent = skaicius + 10
})

// ================================
// didinti-mazinti zona
// ================================

let didintiMazintiAts = document.querySelector('.didinti-mazinti p')
// console.log(didintiMazintiAts);
// susikurem kintamaji auksciau, nes idejus i vidu (eventListenerio) nematytu-nepaimtu

let didintiMazintiSk = 0
let didintiMazintiLimitas = 8


document.querySelector('.didinti-mazinti .mazinti').addEventListener('click' , () => {
    // console.log('mažinimo veiksmas');
    if (didintiMazintiSk > 0 ){
        didintiMazintiSk--
        didintiMazintiAts.textContent = didintiMazintiSk
    }
})

document.querySelector('.didinti-mazinti .didinti').addEventListener('click' , () => {
    // console.log('didinimo veiksmas');
    if (didintiMazintiSk < didintiMazintiLimitas) {
        didintiMazintiSk++
        didintiMazintiAts.textContent = didintiMazintiSk
    }
})

// ================================
// ivairus-sk-keitimai zona
// ================================

let skKeitimaiAts = document.querySelector('.ivairus-sk-keitimai .atsakymas p span')
// console.log(skKeitimaiAts);

let keiciamasSk = 0
// console.log(typeof keiciamasSk, keiciamasSk);


document.querySelector('.ivairus-sk-keitimai .daugiau-vienu').addEventListener('click' , () => {
    // console.log('daugiau vienu');
        keiciamasSk++
        // keiciamasSk += 1
        skKeitimaiAts.textContent =  keiciamasSk
})

document.querySelector('.ivairus-sk-keitimai .daugiau-penkiais').addEventListener('click' , () => {
    // console.log('daugiau penkiais');
    keiciamasSk += 5  
    skKeitimaiAts.textContent =  keiciamasSk
})

document.querySelector('.ivairus-sk-keitimai .daugiau-desimt').addEventListener('click' , () => {
    // console.log('daugiau desimt');
    keiciamasSk += 10  
    skKeitimaiAts.textContent =  keiciamasSk
})

document.querySelector('.ivairus-sk-keitimai .maziau-vienu').addEventListener('click' , () => {
    // console.log('maziau vienu');
    if (keiciamasSk > 0) {
        keiciamasSk--
        skKeitimaiAts.textContent =  keiciamasSk
    }
})

document.querySelector('.ivairus-sk-keitimai .grazinti-nuli').addEventListener('click' , () => {
    // console.log('grazinti nuli');
    keiciamasSk = 0
    skKeitimaiAts.textContent =  keiciamasSk
})

// ================================
// sakinio-analize zona
// ================================

let sakinioAnalizeInputas = document.querySelector('.sakinio-analize #tekstas')
// sis let bus pasiekiamas visur

sakinioAnalizeInputas.addEventListener('input' , () => {
    // console.log('įvyko!');
    // console.dir(sakinioAnalizeInputas)
    // is narsykles suzinom, kad value reikia paimti, nes tekstas prie jo buvo
    // console.log(sakinioAnalizeInputas.value);
    let sakinys = sakinioAnalizeInputas.value
    // tik cia sis let bus pasiekiamas

    // document.querySelector('.sakinio-analize .analize').innerHTML = '<p>' + sakinys + '</p>'
    // innterHTML galima rasyti zymas ir mato zymas

    if (sakinys != '') {
        document.querySelector('.sakinio-analize .analize').innerHTML
        = `<p><strong>Įvestas tekstas:</strong> ${sakinys}</p>
            <p><strong>Raidžių kiekis:</strong> ${sakinys.length}</p>
            <p><strong>Žodžių kiekis:</strong> ${sakinys.split(' ').length}</p>`
            // paskaiciuoja kiek raidziu - length. 
            // split su length pagal tarpus paskaiciuoja kiek zodziu
            // galime kiek norime HTML issivesti
    } else {
        document.querySelector('.sakinio-analize .analize').innerHTML = ''
    }
})
// kai yra ar nera tarpo

// zyma.innerHTML = 'pirmas'
// zyma.innerHTML = 'antras' // antras
// arba:
// zyma.innerHTML = 'pirmas'
// zyma.innerHTML += 'antras' // pirmasantras

// ================================
// kepykla zona
// ================================

  // parseInt(htmlzymainput.value)
  // htmlzymainput.valueAsNumber

document.querySelector('.kepykla .mygtukas button').addEventListener('click', () => {
    // console.log('SKAIČIUOJAM')
    let darbuotojuKiekis = parseInt(document.getElementById('kiekDarbuotoju').value)
    let darbuotojasIskepaPerVal = document.getElementById('kiekDarbIskepa').valueAsNumber
    let kepaloSavikaina = document.getElementById('kepaloSavikaina').valueAsNumber
    let kepaloKaina = document.getElementById('kepaloKaina').valueAsNumber
    let uzsakymuKiekis = document.getElementById('kiekUzsakymu').valueAsNumber

    // console.dir(darbuotojuKiekis)
    // console.log({darbuotojuKiekis, darbuotojasIskepaPerVal, kepaloSavikaina, kepaloKaina, uzsakymuKiekis});
    
    let atsakymai = document.querySelector('.kepykla .rezultatai')

    // kiek kepalų per dieną spėsim iškepti?

    let kepyklosPajegumai = 8 * darbuotojuKiekis * darbuotojasIskepaPerVal
    // console.log(kepyklosPajegumai);

    atsakymai.innerHTML = `<p>Kepykla per dieną spės iškepti <strong>${kepyklosPajegumai}</strong> kepalų.</p>`

    // ar spės iškepti viską? kiek nespės jei nespės?

    if (uzsakymuKiekis <= kepyklosPajegumai) {
        // viską spėja
        atsakymai.innerHTML += `<p>Kepykla <strong>spės</strong> įgyvendinti šios dienos užsakymus.</p>`
        let savikainaBendra = kepaloSavikaina * uzsakymuKiekis
        let kainaBendra = kepaloKaina * uzsakymuKiekis
        let pelnas = kainaBendra - savikainaBendra
        atsakymai.innerHTML += `<p><strong>Visų kepalų pelnas:</strong> ${pelnas} €</p>`
        atsakymai.innerHTML += `<p><strong>Visų kepalų savikaina:</strong> ${savikainaBendra} €</p>`
        atsakymai.innerHTML += `<p><strong>Visų kepalų pardavimo pajamos:</strong> ${kainaBendra} €</p>`
    } else {
        // ne viską spėja
        atsakymai.innerHTML += `<p>Kepykla <strong>nespės</strong> įgyvendinti šios dienos užsakymus.</p>`
        let savikainaBendra = kepaloSavikaina * kepyklosPajegumai
        let kainaBendra = kepaloKaina * kepyklosPajegumai
        let pelnas = kainaBendra - savikainaBendra
        atsakymai.innerHTML += `<p><strong>Visų kepalų pelnas:</strong> ${pelnas} €</p>`
        atsakymai.innerHTML += `<p><strong>Visų kepalų savikaina:</strong> ${savikainaBendra} €</p>`
        atsakymai.innerHTML += `<p><strong>Visų kepalų pardavimo pajamos:</strong> ${kainaBendra} €</p>`
    }
})

// ================================
// fiksuoti-laika zona
// ================================

document.querySelector('.fiksuoti-laika button').addEventListener('click' , () => {
    // console.log('pavyko')
    let laikas = new Date().toLocaleString('lt')
    // console.log(laikas);
    // isveda laika su data, kuris yra tuo metu

    // document.querySelector('.fiksuoti-laika .sarasas').innerHTML += `<p>....`
    
    let paragrafas = document.createElement('p')
    paragrafas.textContent = laikas

    let trynimoMygtukas = document.createElement('button')
    trynimoMygtukas.textContent = 'X'
    paragrafas.appendChild(trynimoMygtukas)
    // data laikas x - gale, nes appendChild

    trynimoMygtukas.addEventListener('click' , () => {
        // console.log('yo!');
        // console.log(trynimoMygtukas);
        // console.log(trynimoMygtukas.parentElement);
        trynimoMygtukas.parentElement.remove()
    })

    // document.querySelector('.fiksuoti-laika .sarasas').appendChild(paragrafas)
    document.querySelector('.fiksuoti-laika .sarasas').prepend(paragrafas)
    // prepend deda i virsu (prieki) naujausia laika, ko innerHTML nemoka, tik i apacia (gala) kaip ir appendChild
})
// event listener idetas i kita event listeneri. Su inner.HTML sunkiau butu