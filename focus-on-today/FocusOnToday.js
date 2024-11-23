const checkBoxList = document.querySelectorAll('.custom-checkbox');
const inputfields = document.querySelectorAll('.goal-input');
const errorLabel = document.querySelector('.error-label')
const progressBar = document.querySelector('.progress-bar')



checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener('click', (event)=>{
        const inputfields = document.querySelectorAll('.goal-input');
        const allGoalsAdded = [...inputfields].every(function (input){
            return input.value
        })

        if(allGoalsAdded){
            checkbox.parentElement.classList.toggle('completed')
        } else{
           progressBar.classList.add('show-error') 
        }
    })
})