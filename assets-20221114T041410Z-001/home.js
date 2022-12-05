let empPayrollList
window.addEventListener('DOMContentLoaded',(event)=>{
    empPayrollList= getEmployeepayrollDataFormStorage()
    document.querySelector(".emp-count").textContent=empPayrollList.length
    creteInnerHtml()
    localStorage.removeItem('editEmp')
})