const resutElement = document.getElementById("result")
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = "+"

// console.log(resutElement.textContent);
// console.log(input1.value)
// console.log(input2.value)
// console.log(sum)

plusBtn.onclick = function(){
    action ='+'
}
minusBtn.onclick = function(){
    action = '-'
}
function printReslt (result) {
    if (result < 0) {
        resutElement.style.color = 'red'
    } 
    else {
        resutElement.style.color = 'green'
    }
    resutElement.textContent = result
}

function computeNumbersWithAction (inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+') {
        return num1 + num2
    }

    if (actionSymbol == '-') {
        return num1 - num2
    }
}

submitBtn.onclick = function() {

    const result = computeNumbersWithAction(input1, input2, action)
    printReslt(result)

    // if (action == '+') {
    // const sum = Number(input1.value) + Number(input2.value)
    // printReslt(sum)
    // }
    // else if (action == '-') {
    // const sum = Number(input1.value) - Number(input2.value)
    // printReslt(sum)
    // }
    
}