const temperature = 59

function convertTemperature(degree, type){
    if(type == 'F')
        return (degree - 32) * 5/9
    else if(type == 'C')
        return degree * 9/5 +32
    else
        return 'Tipo de temperatura desconhecida!'
}

console.log('A conversão de F para C é igual a: '+ convertTemperature(temperature, 'F'))
console.log('A conversão de C para F é igual a: '+ convertTemperature(temperature, 'C'))