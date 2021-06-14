const grade = Array('75.5', '85.9', '95.1', '55.5')
const student = Array('Matheus', 'Lucas', 'Viniccius', 'Ana')

const newGrade = Array()
const examResult = Array()

for(let note of grade){
    if(note <= 60)
        newGrade.push('F')
    else if(note > 60 && note <= 80)
        newGrade.push('C')
    else
        newGrade.push('A')
}

examResult.push(newGrade, student)

console.log("Notas")
for(let i=0; i<examResult[1].length; i++){
    console.log(`O(A) ${examResult[1][i]} obteve a nota ${examResult[0][i]} neste semestre!`)
}

