const grid = document.querySelector('.grid');
const buttons = document.querySelectorAll('.grid div');

buttons.forEach(button => {button.textContent = `${button.getAttribute('id')}`; button.setAttribute('style', `display: grid; place-items: center; background-color: #fff;`)});

buttons.forEach(button => {
    if(button.textContent>=0 || button.textContent<=9 || button.textContent == '+/-' || button.textContent == ',') {
        button.style.fontWeight = 'bold';
    }
})

grid.setAttribute('style', `display: grid; grid-template-rows: repeat(6, 1fr); grid-template-columns: repeat(4, 1fr); height: 335px; gap: 2px; padding: 1px;`);