const button =document.getElementById('generate');

button.addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    let resut = Math.floor(Math.random() * (max - min + 1)) + min;

        if(isNaN(resut)){
            resut ='valor inválido';
        }

    document.querySelector('#resut > span').textContent = resut;
});
    
