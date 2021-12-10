const grid = document.querySelector('.grid');
const buttons = document.querySelectorAll('.grid div');
const display = document.querySelector('.display');
const historyButton = document.querySelector('#history');
const history = document.querySelector('.history');
const historyList = document.querySelector('.history-ul');

let previousNumber;
let operator;
let currentNumber;
let sideNumber;
let lastCalculation;
let a;
let b;

buttons.forEach(button => {
    // Center each button's textContent and set bgColor to white
    button.textContent = `${button.getAttribute('id')}`; button.setAttribute('style', `display: grid; place-items: center; background-color: hsl(0, 0%, 98%);`);

    // Make 0-9, "," and "+/-" buttons bold
    if(button.textContent>=0 || button.textContent<=9 || button.textContent == '+/-' || button.textContent == ',') {
        button.style.fontWeight = 'bold';
        button.style.backgroundColor = '#fff';
    }
    if(button.textContent == '=') {
        button.style.backgroundColor = 'hsl(200, 100%, 75%)';
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
                else {
                    a = previousNumber;
                    b = currentNumber;
                    calc(operator);
                    addToHistory(a, b);
                    currentNumber = 0;
                    display.textContent = '0';
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
                    else {
                        a = previousNumber;
                    b = currentNumber;
                    calc(operator);
                    addToHistory(a, b);
                        currentNumber = undefined;
                        display.textContent = '0';
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
                else {
                    a = previousNumber;
                    b = currentNumber;
                    calc(operator);
                    addToHistory(a, b);
                    currentNumber = undefined;
                    display.textContent = '0';
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
                    else {
                        a = previousNumber;
                    b = currentNumber;
                    calc(operator);
                    addToHistory(a, b);
                        currentNumber = undefined;
                        display.textContent = '0';
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
                currentNumber = Math.pow(currentNumber, 2);
                display.textContent = currentNumber;
                break;
            case 'sqrt':
                console.log(`currentNumber is equal ${currentNumber}`);
				currentNumber = Math.sqrt(currentNumber);				
                display.textContent = currentNumber;
                break;
            case '<':
                display.textContent = display.textContent.slice(0, display.textContent.length-1);
                currentNumber = display.textContent*1;
                break;
            case '%':
                currentNumber = currentNumber/100;
                display.textContent = currentNumber;
                break;
            case 'CE':
                display.textContent = 0;
                currentNumber = undefined;
                break;
            case 'C':
                previousNumber = undefined;
                operator = undefined;
                currentNumber = undefined;
                sideNumber = undefined;
                display.textContent = 0;
                display.setAttribute('data', '');
                break;
            case '=':
                result(operator);
                // addToHistory();
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
            lastCalculation = previousNumber/=currentNumber;
            return lastCalculation;
            break;
        case 'X':
            lastCalculation = previousNumber*=currentNumber;
            return lastCalculation;
            break;
        case '-':
            lastCalculation = previousNumber-=currentNumber;
            return lastCalculation;
            break;
        case '+':
            lastCalculation = previousNumber+=currentNumber;
            return lastCalculation;
            break;
    }
    
}

const result = (operator) => {
    switch(operator) {
        case '/':
            lastCalculation = (previousNumber/currentNumber);
            display.textContent = (previousNumber/currentNumber);
            addToHistory(previousNumber, currentNumber);
            break;
        case 'X':
            lastCalculation = `${previousNumber * currentNumber}`;
            display.textContent = `${previousNumber * currentNumber}`;
            addToHistory(previousNumber, currentNumber);
            break;
        case '-':
            lastCalculation = `${previousNumber - currentNumber}`;
            display.textContent = `${previousNumber - currentNumber}`;
            addToHistory(previousNumber, currentNumber);
            break;
        case '+':
            lastCalculation = (previousNumber+currentNumber);
            display.textContent = (previousNumber+currentNumber);
            addToHistory(previousNumber, currentNumber);
            break;
    }
    display.setAttribute('data', `${previousNumber} ${operator} ${currentNumber}`);
    previousNumber = undefined;
    currentNumber = display.textContent*1;
    
}

historyButton.addEventListener('click', () => {
    document.querySelector('.history-card').classList.toggle('show');
    document.querySelector('.transparent').classList.toggle('opacity');
    history.classList.toggle('index');
})



const addToHistory = (a, b) => {
    const li = document.createElement('li');
    document.querySelector('.history-ul').prepend(li);
   
    const p1 = () => {
        const p = document.createElement('p');
        p.setAttribute('class', 'history-calc');
        p.textContent = `${a} ${operator} ${b} =`;
        li.appendChild(p);
    }
    
    const p2 = () => {
        const p = document.createElement('p');
        p.setAttribute('class', 'history-result');
        p.textContent = `${lastCalculation}`;
        li.appendChild(p);
    }
    p1();
    p2();
}






// Set up grid for buttons
grid.setAttribute('style', `display: grid; grid-template-rows: repeat(6, 1fr); grid-template-columns: repeat(4, 1fr); height: 335px; gap: 2px; padding: 1px;`)