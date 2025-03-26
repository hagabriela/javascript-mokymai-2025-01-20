// api - lyg duomenys butu is ten gauti

function loadData(dataWrapperSelector, dataArray, balanceWrapperSelector) {
    let dataWrapper = document.querySelector(dataWrapperSelector)

    for (const item of dataArray) {
        // console.log(item);
        dataWrapper.innerHTML += `<div class="item-wrapper">
                <p class="id">ID: ${item.id}</p>
                <p class="type ${item.type}">
                    ${item.type == 'income' ? 'Pajamos' : 'Išlaidos'}
                </p>
                <p class="amount ${item.type}">${item.amount} €</p>
                <p class="when">${item.when}</p>
            </div>`
    } 
    let finalBalance = calculateBalance(dataArray)

    let balanceWrapper = document.querySelector(balanceWrapperSelector)
    balanceWrapper.innerHTML = `<h3>
        Galutinis likutis: 
        <span class = "${finalBalance > 0 ? 'positive' : 'negative'}">
            ${finalBalance} €
        </span>
        <span class = "incomes-expenses">
            ( <span class = "positive">
                Pajamos: ${calculateIncomes(dataArray)} €
              </span> 
              / 
              <span class = "negative">
                Išlaidos: ${calculateExpenses(dataArray)} € 
              </span>
            )
        </span>
    </h3>`
}

function calculateBalance(paymentsData) {
    let sum = 0
    for (const item of paymentsData) {
        sum += item.amount
    }
    return sum
}

function calculateIncomes(paymentsData) {
    let sum = 0
    for (const item of paymentsData) {
        // if (item.amount > 0) {
            // sum += item.amount
        // } ARBA
        if (item.type == 'income') {
            sum += item.amount
        }
    }
    return sum
}
// kitu butu nei incomes, bet galima ir taip pat
function calculateExpenses(paymentsData) {
    return paymentsData.filter(item => item.type == 'expense')
        .reduce((sum, item) => sum + item.amount, 0)
}


let payments = [
    { id: 1, type: 'income', amount: 900, when: '2022-10-01 10:30:24' },
    { id: 2, type: 'income', amount: 300, when: '2022-10-02 11:29:03' },
    { id: 3, type: 'expense', amount: -23, when: '2022-10-02 12:20:00' },
    { id: 4, type: 'expense', amount: -14, when: '2022-10-02 13:10:15' },
    { id: 5, type: 'expense', amount: -45, when: '2022-10-03 10:10:03' },
    { id: 6, type: 'expense', amount: -67, when: '2022-10-03 10:15:00' },
    { id: 7, type: 'income', amount: 200, when: '2022-10-04 16:04:00' },
]

loadData('.payments-wrapper', payments, '.balance-wrapper')