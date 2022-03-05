let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'))

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case 'CLR':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1)
                    break;
                }
            case '=':
                if (display.innerText) {
                    display.innerText = eval(display.innerText);
                    break;
                }
            default:
                display.innerHTML = display.innerHTML + e.target.innerText;
        }
    })
})