document.querySelector('#finish').addEventListener('click', function(event){
    event.preventDefault();
    let hobbiesInput = document.querySelector('#hobiselect').value,
        imgInput = document.querySelector('#imgInput').value;
    localStorage.setItem("hobbies", hobbiesInput);
    localStorage.setItem("id's image", imgInput);

    if(hobbiesInput == false){
    alert("Please select a hobbie");
    return;
    }
    
    if(imgInput == false){
    alert("Please put your image");
    return;
    }
    document.getElementById('summary').classList.remove('hidden');
    document.getElementById('phase3').classList.add('hidden');
});

document.querySelector('#backTo2').addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = 'phase-2.html';
});

function toPhase2(){
    let cityCheck =localStorage.getItem("city");
    let streetCheck =localStorage.getItem("street");
    let AddressnumberCheck =localStorage.getItem("Addressnumber");
    
    if(cityCheck==null || cityCheck == false){
        alert('your city input is empty');
        window.location.href = 'phase-2.html';
        return;
    }
    
    if(streetCheck == null || streetCheck == false){
        alert('your street input is empty');
        window.location.href = 'phase-2.html';
        return;
    }

    if (AddressnumberCheck == null || AddressnumberCheck == 0) {
        alert("your address number input is empty!");
        window.location.href = 'phase-2.html';
        return;
    }
}
toPhase2();