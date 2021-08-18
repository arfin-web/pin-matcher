document.getElementById('pinGenerate').addEventListener('click', function () {
    const pin = Math.round(Math.random() * 9000);
    console.log(pin);
    const displayPin = document.getElementById('displayPin');
    const pinString  = pin + '';
    if (pinString.length == 4) {
        displayPin.value = pinString;
    }
})

const buttons =  document.querySelectorAll('.btn');
    for (const button of buttons) {
        button.addEventListener('click', function () {
            let showPin = document.getElementById('showPin');
            showPin.value = showPin.value + button.innerText;
    })
}

document.getElementById('clear').addEventListener('click', function () {
    let showPin = document.getElementById('showPin');
    showPin.value = '';
})

document.getElementById('submit').addEventListener('click', function () {
    const displayPin = document.getElementById('displayPin');
    let showPin = document.getElementById('showPin');

    if (displayPin.value == showPin.value) {
        document.getElementById('match').style.display = 'block';
    } else {
        document.getElementById('not').style.display = 'block';
    }
})