class Calculator {
    constructor(expr, res) {
      this.exprEl = expr
      this.resEl = res
      this.clear()
    }
    clear() {
      this.exprEl.value = ''
      this.resEl.value = ''
    }
    delete() {
      this.exprEl.value = this.exprEl.value.slice(0, -1)
    }
    appendNumber(number) {
      this.exprEl.value += number
    }
    appendOperation(operation) {
        this.exprEl.value += operation
    }
    compute() {
        try {
            const eres = eval(this.exprEl.value);
            this.resEl.value = eres;
        } catch (error) {
            this.resEl.value = 'ERR';
        }
    }
}
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const expressionInput = document.getElementById('expr');
const resultInput = document.getElementById('res');
const calculator = new Calculator(expressionInput, resultInput)
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
  })
})
operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendOperation(button.innerText)
  })
})
equalsButton.addEventListener('click', button => {
  calculator.compute()
})
deleteButton.addEventListener('click', button => {
  calculator.delete()
})
