
const inputs = document.querySelectorAll('input');

function nextButton(event) {
    event.preventDefault();

    // need get input of phase 1 and check them 

    let number = Number(inputs[2].value);
    console.log(number)
    if (inputs[0].value == '') {
        alert("Please enter a city");
        return;
    } else if (inputs[1].value == '') {
        alert("Please enter a street");
        return;
    }else if(number == 0 ){
        alert("Please enter a number");
        return;
    }

    // need save inputs in local storeg

    // go to phase3.html..
    window.location.href = 'phase3.html';
}

function backButton(event){
    event.preventDefault();
    window.location.href = 'phase1.html';
}