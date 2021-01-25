document.querySelector('#finish').addEventListener('click', function(event){
    event.preventDefault();
    let hobbiesInput = document.querySelector('#hobiselect').value,
        imgInput = document.querySelector('#imgInput').value;
    localStorage.setItem("hobbies", hobbiesInput);
    localStorage.setItem("id's image", imgInput);
    document.getElementById('summary').classList.remove('hidden');
    document.getElementById('phase3').classList.add('hidden');
});

document.querySelector('#backTo2').addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = 'phase-2.html';
});

function toPhase2(){
    let cityCheck =localStorage.getItem("city");
    let street =localStorage.getItem("street");
    let Addressnumber =localStorage.getItem("Addressnumber");
    
    if(cityCheck==null || cityCheck == false){
        alert('your city input is empty');
        window.location.href = 'phase-2.html';
        return;
    }
    if(street==null || street == ''){
        alert('your street input is empty');
        window.location.href = 'phase-2.html';
        return;
    }
    if (Addressnumber==null || Addressnumber.length < 2) {
        alert("your address number input is empty!");
        window.location.href = 'phase-2.html';
        return;
    }
}
toPhase2();