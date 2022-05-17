const button = document.getElementById("btn")!;


function add(n1: number, n2: number) {
    if (n1 > n2) {
        return n1 + n2;
    }
    return;
}

function clickHandler(message: string) {
    let userName = 'Mos'

    userName = '11'
    console.log('clicked! ' + message + userName)
}

button.addEventListener('click', clickHandler.bind(null, "you"))