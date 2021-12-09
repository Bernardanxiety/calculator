const grid = document.querySelector('.grid');
const buttons = document.querySelectorAll('.grid div');
const display = document.querySelector('.display');

let plusCount = 0;
let previousNumber;
let operator;
let currentNumber;
let newNumber;

buttons.forEach(button => {
    // Center each button's textContent and set bgColor to white
    button.textContent = `${button.getAttribute('id')}`; button.setAttribute('style', `display: grid; place-items: center; background-color: hsl(0, 0%, 98%);`);

    // Make 0-9, "," and "+/-" buttons bold
    if(button.textContent>=0 || button.textContent<=9 || button.textContent == '+/-' || button.textContent == ',') {
        button.style.fontWeight = 'bold';
        button.style.backgroundColor = '#fff';
    }

    button.addEventListener('click', (e) => {
        const func = e.target.getAttribute('id');
        currentAlgo();
        switch(func) {
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
                if(display.textContent==='0') {
                    display.textContent = '';
                    display.textContent+=func;
                }
                else {
                    display.textContent+=func;
                }
                currentNumber = display.textContent*1;
                console.log(currentNumber);
                break;
            case '+/-':
                display.textContent*=(-1);
                currentNumber*=(-1);
                console.log(currentNumber);
                console.log(typeof currentNumber);
                break;
            case ',':
                if(display.textContent.includes('.')) {

                }
                else {
                    display.textContent+=func.replace(',', '.');
                    console.log(currentNumber);
                }
                break;
            case '/':
                if(previousNumber===undefined) {
                previousNumber = currentNumber;
                currentNumber = undefined;
                display.textContent = '0';
                }
                else if(currentNumber===undefined) {

                }
                else if(currentNumber!==undefined) {
                    calc(operator);
                    currentNumber = 0;
                    display.textContent = '0';
                }
                else {
                // previousNumber = previousNumber/currentNumber;

                }
                operator = func;
                console.log(previousNumber);
                break;
            case 'X':
                    if(previousNumber===undefined) {
                    previousNumber = currentNumber;
                    currentNumber = undefined;
                    display.textContent = '0';
                    }
                    else if(currentNumber===undefined) {
    
                    }
                    else if(currentNumber!==undefined) {
                        calc(operator);
                        currentNumber = 0;
                        display.textContent = '0';
                    }
                    else {
                    // previousNumber*=currentNumber;
                    }
                    operator = func;
                    console.log(previousNumber);
                    break;
            case '-':
                if(previousNumber===undefined) {
                previousNumber = currentNumber;
                currentNumber = undefined;
                display.textContent = '0';
                }
                else if(currentNumber===undefined) {
    
                }
                else if(currentNumber!==undefined) {
                    calc(operator);
                    currentNumber = 0;
                    display.textContent = '0';
                }
                else {
                // previousNumber-=currentNumber;
                }
                operator = func;
                console.log(previousNumber);
                break;
            case '+':
                if(previousNumber===undefined) {
                    previousNumber = currentNumber;
                    currentNumber = undefined;
                    display.textContent = '0';
                    }
                    else if(currentNumber===undefined) {
        
                    }
                    else if(currentNumber!==undefined) {
                        calc(operator);
                        currentNumber = 0;
                        display.textContent = '0';
                    }
                    else {
                    // previousNumber+=currentNumber;
                    }
                    operator = func;
                    console.log(previousNumber);
                    break;
            case '1/x':
                // if(previousNumber==undefined) {
                //     currentNumber=display.textContent*1;
                //     newNumber=currentNumber*1;
                    
                    
                //     display.textContent = (1/newNumber);
                //     previousNumber=display.textContent*1;
                // }
                // else {
                //     currentNumber = 1/currentNumber;
                //     display.textContent = currentNumber;
                // }
                currentNumber = 1/currentNumber;
                    display.textContent = currentNumber;
                break;
                // return display.setAttribute('data', `1/(${newNumber})`);
            case 'x^2':
                currentNumber = currentNumber*currentNumber;
                display.textContent = currentNumber;
                break;
            case '<':
                display.textContent = display.textContent.slice(0, display.textContent.length-1);
                currentNumber = display.textContent*1;
                break;
            case '=':
                result(operator);
                break;
        }
        console.log(`previousNumber: ${previousNumber}`);
        console.log(`currentNumber: ${currentNumber}`);
    })

    
})

const currentAlgo = () => {
    if(previousNumber!==undefined) {
        if(operator!==undefined) {
            display.setAttribute(`data`, `${previousNumber} ${operator}`);
        }
        else {
            display.setAttribute(`data`, `${previousNumber}`);
        }
    }
}

const calc = (operator) => {
    switch(operator) {
        case '/':
            return previousNumber/=currentNumber;
            break;
        case 'X':
            return previousNumber*=currentNumber;
            break;
        case '-':
            return previousNumber-=currentNumber;
            break;
        case '+':
            return previousNumber+=currentNumber;
            break;
    }
}

const result = (operator) => {
    switch(operator) {
        case '/':
            display.textContent = (previousNumber/currentNumber);
            break;
        case 'X':
            display.textContent = `${previousNumber * currentNumber}`;
            break;
        case '-':
            display.textContent = `${previousNumber - currentNumber}`;
            break;
        case '+':
            display.textContent = (previousNumber+currentNumber);
            break;
    }
    display.setAttribute('data', `${previousNumber} ${operator} ${currentNumber}`);
    previousNumber = undefined;
    currentNumber = display.textContent*1;
    
}






// Set up grid for buttons
grid.setAttribute('style', `display: grid; grid-template-rows: repeat(6, 1fr); grid-template-columns: repeat(4, 1fr); height: 335px; gap: 2px; padding: 1px;`)