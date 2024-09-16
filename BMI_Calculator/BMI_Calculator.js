const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height. the height provided by you ${height} is not valid.`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        weight.innerHTML = `Please give a valid weight. the weight provided by you ${weight} is not valid.`;
    }else{
        result.innerHTML = ((weight)/((height*height )/10000));
        document.querySelector('#height').value=""
        document.querySelector('#weight').value=""
    }
})
