const checkBoxList = document.querySelectorAll('.custom-checkbox');
const inputfields = document.querySelectorAll('.goal-input');
const errorLabel = document.querySelector('.error-label')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')


const AllGoals = {}


checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener('click', (event)=>{
        const inputfields = document.querySelectorAll('.goal-input');
        const allGoalsAdded = [...inputfields].every(function (input){
            return input.value
        })

        if(allGoalsAdded){
            checkbox.parentElement.classList.toggle('completed')
        } else{
           progressBar.classList.add('show-error');
        }
    })
})

inputfields.forEach((input) => {
    input.addEventListener('focus', (event) => {
        progressBar.classList.remove('show-error');
    })
})