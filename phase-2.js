
const inputs = document.querySelectorAll('input');

function nextButton(event) {
    event.preventDefault();

    // need get input of phase 1 and check them \
    

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
    localStorage.setItem("city", inputs[0].value);
    localStorage.setItem("street", inputs[1].value);
    localStorage.setItem("Addressnumber", number);

    // go to phase3.html..
    window.location.href = 'phase3.html';
}

function backButton(event){
    event.preventDefault();
    window.location.href = 'phase1.html';
}

// function inStart(){
//     let emailCheck1 =localStorage.getItem("name");
//     let birthInput1 =localStorage.getItem("email");
//     let nameInput1 =localStorage.getItem("birthday");
    
//     if(emailCheck1==null || emailCheck1 == false){
//         alert('Wrong email address.');
//         window.location.href = 'phase1.html';
//         return;
//     }
//     if(birthInput1==null || birthInput1 == ''){
//         alert('Enter Birthday');
//         window.location.href = 'phase1.html';
//         return;
//     }
//     if (nameInput1==null || nameInput1.length < 2) {
//         alert("Name must have at least 3 letters!");
//         window.location.href = 'phase1.html';
//         return;
//     }
// }
// inStart();