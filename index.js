let listButtons = document.querySelectorAll('.buttons button');
let lastReturn = document.querySelector('.screen .last');
let currentReturn = document.querySelector('.screen .current');

let firstNumber = null;
let newNumber = null;
let calculator = '+';

function reloadScreen() {
    lastReturn.innerHTML = firstNumber ? firstNumber + ' ' + calculator : '';
    currentReturn.innerHTML = newNumber ? newNumber : '0';
}
reloadScreen();

listButtons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonValue = button.innerHTML;
        console.log('Button value: ', buttonValue);

        switch (buttonValue) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                newNumber = newNumber ? newNumber + buttonValue : buttonValue;
                break;
            case '.':
                newNumber = newNumber ? newNumber + buttonValue : '0.';
                break;
            case '±':
                newNumber = -1 * newNumber;
                break;
            case '%':
                newNumber = 0.01 *newNumber;
                break;
            case '+':
            case '-':
            case 'X':
            case '÷':
                if (newNumber) {
                    calculator = buttonValue;
                    firstNumber = newNumber;
                    newNumber = null;
                    }
                break;
            case '=':
                applyCalculator();
                break;
            default:
                break;
        }
        reloadScreen();
    })

})
function applyCalculator() {

}