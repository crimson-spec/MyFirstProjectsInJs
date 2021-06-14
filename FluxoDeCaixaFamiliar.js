const monthSpend = {
    credit: Array(),
    debt: Array()
}

function sum(vet){
    let total = 0;
    for(let value of vet){
        total += value;
    }
    return total
}

function calcMonthSpend(object){
    let sumCredit = sum(object.credit)
    let sumDebt = sum(object.debt)
    let result = sumCredit - sumDebt
    return result
}

monthSpend.credit = [1500, 800, 600, 11250]
monthSpend.debt = [2000, 1500, 50, 250]

let functionReturn = calcMonthSpend(monthSpend)
functionReturn > 0 ? console.log('O saldo mensal está positivo e foi de '+functionReturn.toFixed(2)+ 'R$'): console.log('O saldo mensal está negativo foi de '+functionReturn.toFixed(2)+ 'R$')
