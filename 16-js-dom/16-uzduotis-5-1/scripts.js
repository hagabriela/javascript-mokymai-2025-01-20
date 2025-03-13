let calculateButton = document.getElementById('calculate')

calculateButton.addEventListener('click' , function() {
    // console.log('clicked');
    let employeesCount = document.getElementById('employees-count').valueAsNumber
    // let employeesCount = parseInt(document.getElementById('employees-count').value)
    let employeeMakesPerDay = parseInt(document.getElementById('employee-makes-per-day').value)
    let dayReservations = parseInt(document.getElementById('day-reservations').value)
    let costPrice = parseInt(document.getElementById('cost-price').value)
    let price = parseInt(document.getElementById('price').value)

    let bakeryTotal = employeesCount * employeeMakesPerDay
    let isBakeryGonnaMakeIt = bakeryTotal >= dayReservations
    // cia paliekam ramybeje, kad programiskai bullen tipo isvestu ats

    // let logInfo = {
    //     bakeryTotal,
    //     isBakeryGonnaMakeIt
    // }
    // console.log(logInfo)

    let resultsDiv = document.getElementById('results')
    // console.log(resultsDiv);
    resultsDiv.innerHTML = `<p><strong>Kepykla per dieną spės pagaminti:</strong> ${bakeryTotal} kepalų</p>`
    // perasoma kas yra tenais del =
    // po to per + kad prideti o neperasyti
    resultsDiv.innerHTML += `<p><strong>Jei reikia spėti pagaminti:</strong> ${dayReservations} kepalų<p>`
    resultsDiv.innerHTML += `<p><strong>Ar spės pagaminti?</strong> ${isBakeryGonnaMakeIt ? 'taip' : 'ne'}</p>`
    // inline if. Jei true - taip, jei false - ne


    if (dayReservations <= bakeryTotal) {
        // viską spėja
        resultsDiv.innerHTML += `<p>Kepykla <strong>spės</strong> įgyvendinti šios dienos užsakymus.</p>`
        let costPriceTotal = costPrice * dayReservations
        let priceTotal = price * dayReservations
        let profit = priceTotal - costPriceTotal
        resultsDiv.innerHTML += `<p><strong>Visų kepalų pelnas:</strong> ${profit} €</p>`
        resultsDiv.innerHTML += `<p><strong>Visų kepalų savikaina:</strong> ${costPriceTotal} €</p>`
        resultsDiv.innerHTML += `<p><strong>Visų kepalų pardavimo pajamos:</strong> ${priceTotal} €</p>`
    } else {
        // ne viską spėja
         resultsDiv.innerHTML += `<p>Kepykla <strong>nespės</strong> įgyvendinti šios dienos užsakymus.</p>`
         let costPriceTotal = costPrice * dayReservations
         let priceTotal = price * dayReservations
         let profit = priceTotal - costPriceTotal
         resultsDiv.innerHTML += `<p><strong>Visų kepalų pelnas:</strong> ${profit} €</p>`
         resultsDiv.innerHTML += `<p><strong>Visų kepalų savikaina:</strong> ${costPriceTotal} €</p>`
         resultsDiv.innerHTML += `<p><strong>Visų kepalų pardavimo pajamos:</strong> ${priceTotal} €</p>`
    }
})

document.getElementById('employees-count').addEventListener('keyup' , function(event) {
    // console.log('reiksme pasikeite');
    // console.log(event.target.valueAsNumber);
    let inputValue = event.target.valueAsNumber

    if (inputValue < 0) {
        // console.log(event.target);
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    } else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
    }
})

document.getElementById('employee-makes-per-day').addEventListener('keyup' , function(event) {
    // console.log('reiksme pasikeite');
    //  console.log(event.target.valueAsNumber);
    let inputValue = event.target.valueAsNumber

    if (inputValue < 0) {
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    } else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
    }
})

document.getElementById('day-reservations').addEventListener('keyup' , function(event) {
    let inputValue = event.target.valueAsNumber

    if (inputValue < 0) {
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    } else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
    }
})

document.getElementById('cost-price').addEventListener('keyup' , function(event) {
    let inputValue = event.target.valueAsNumber

    if (inputValue < 0) {
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    } else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
    }
})

document.getElementById('price').addEventListener('keyup' , function(event) {
    let inputValue = event.target.valueAsNumber

    if (inputValue < 0) {
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    } else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
    }
})

document.getElementById('reset').addEventListener('click' , function() {
    // console.log('clicked');
    document.getElementById('employees-count').value = 0
    document.getElementById('employee-makes-per-day').value = 0
    document.getElementById('day-reservations').value = 0
    document.getElementById('cost-price').value = 0
    document.getElementById('price').value = 0
    document.getElementById('results').innerHTML = '<p>Kol kas nieko nėra.</p>'
})