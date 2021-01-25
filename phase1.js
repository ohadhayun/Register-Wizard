function checkAndMove(event) {
    event.preventDefault();
    const nameInput = document.querySelector('#name').value;
    if (nameInput.length < 2) {
        alert("Name must have at least 3 letters!");
        return;
    }
    const emailInput = document.querySelector('#exampleInputEmail1').value;
    const emailCheck = emailInput.includes("@");
    if(emailCheck == false){
        alert('Wrong email address.');
        return;
    }
    const birthInput = document.querySelector('#birthday').value;    
    if(birthInput == ''){
        alert('Enter Birthday');
        return;
    }
    const checkboxInput = document.querySelector('#exampleCheck1'); 
    if(checkboxInput.checked == false){
        alert('CheckBox is empty, you are a robot');
        return;
    }

    localStorage.setItem("name", nameInput);
    localStorage.setItem("email", emailInput);
    localStorage.setItem("birthday", birthInput);

    window.location.href="phase-2.html";

}