document.querySelector('#finish').addEventListener('click', function(event){
    event.preventDefault();
    let hobbiesInput = document.querySelector('#hobiselect').value,
        imgInput = document.querySelector('#imgInput').value;
    localStorage.setItem("hobbies", hobbiesInput);
    localStorage.setItem("id's image", imgInput);
    document.getElementById('summary').classList.remove('hidden');
    document.getElementById('phase3').classList.add('hidden');
});
