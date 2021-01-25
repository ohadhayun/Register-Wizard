document.querySelector('#finish').addEventListener('click', function(event){
    event.preventDefault();
    let hobbiesInput = document.querySelector('#hobiselect').Value,
        imgInput = document.querySelector('#imgInput').Value;

    localStorage.setItem("hobbies", hobbiesInput);
    localStorage.setItem("id's image", imgInput);

        alert('thank you');
    document.getElementById('summary').classList.remove('.hidden');
});

