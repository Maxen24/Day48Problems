let isUpdate= false
let employeePayrollObj ={}

window.addEventListener('DOMContentLoaded',(event) =>{
    const name = document.querySelector('#name')
    name.addEventListener('input', function(){
        
    const salary=document.querySelector('#salary')
    setTextValue('.salary-output',salary.value)
    salary.addEventListener('input',function(){
    checkForUpdate()
    })
    })
})
