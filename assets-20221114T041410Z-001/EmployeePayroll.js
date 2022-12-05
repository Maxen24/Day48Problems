// UC1
const remove =(node)=>{
    let empPayrollData = empPayrollList.find(empData => empData._id== node.id)
    if(!empPayrollData) return
    const index= empPayrollList.map(empData => empData._id)
        .indexOf(empPayrollData._id)
    empPayrollList.splice(index, 1)
    localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList))
    document.querySelector(".emp-count").textContent=empPayrollList.length
    createInnerHtml()
}
/// uc2
const checkForUpdate = () => {
    const employeePayrollJson = localStorage.getItem('editEmp');
    isUpdate = employeePayrollJson ? true : false;
     if (!isUpdate) return;
     employeePayrollObj = JSON.parse(employeePayrollJson);
    setForm();
}
    const setForm=() => {    
    setValue('#name', employeePayrollobj._name);    
    setSelectedValues('[name=profile]', employeePayrollobj._profilePic); 
    setSelectedValues('[name=gender]', employeePayrollobj._gender);
    setSelectedValues('[name=department]', employeePayrollobj._department); 
    setValue('#salary', employeePayrollobj._salary); 
    setTextValue('.salary-output', employeePayrollobj._salary);
    setValue('#notes', employeePayrollobj._note);
    let date= stringifyDate(employeePayroll0bj._startDate).split(" "); 
    setValue('#day, date[0]');
    setValue('month', date[1]);
    setValue('#year', date[2]);
    }
    const setSelectedValues=(propertyValue,value)=>{    
        let allItems= document.querySelectorAll(propertyValue);
        allItems.forEach(item => {    
            if(Array.isArray(value)) {
                 if (value.includes(item.value)) {
                    item.checked= true;
                 }
                }
        
            else if (item.value === value){
             item.checked= true;
            }
        })
    }
// uc3 employeepayroll.js
class EmployeePayrollData {
    // getter and setter method
    get id() { return this._id; }
     set id(id) {
        this._id=id;
    
    }
    get name() { return this._name; }
    set name(name) { 
        this._name=name; 
    }
    get profilePic() { return this._profilePic; }
    set profilePic (profilePic) { 
        this._profilePic=profilePic;
    }
    get gender() { return this._gender; }
    set gender (gender) { 
        this._gender=gender;
     }
    get department() { return this._department; } 
    set department (department) { 
        this._department=department;
    }
    get salary() { return this._salary; }
    set salary(salary) { 
        this._salary=salary;
    }
    get note() { return this._note; }
    set note(note) { 
        this._note=note;
    }
    get startDate() { return this._startDate; }
    set startDate(startDate) {
        this.startDate=startDate;
        let now = new Date();
        if (startDate > now) throw 'Start Date is a Future Date!'; 
        var diff= Math.abs(now.getTime()- startDate.getTime());
        if (diff /(1000* 60 * 60 * 24) > 30) 
        throw 'Start Date is beyond 30 Days!';
         this._startDate = startDate;
    
    }
    
    // method
    
    toString() {const options = {year: 'numeric', month: 'long', day: 'numeric'};
    const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
    return "id="+ this.id+ ", name='"+ this.name + ",gender='"+ this.gender + 
    ", profilePic='"+ this.profilePic + ", department="+ this.department +
    ", salary="+ this.salary + ", startDate=" + empDate + ", note=" + this.note;
    }
    
    }
    window.addEventListener('DOMContentLoaded', (event)=> {
        const name= document.querySelector('#name');
        const textError = document.querySelector('.text-error');
        name.addEventListener('input', function() {
            if(name.value.length==0) {
                textError.textContent="";
                return;
            }
            try {
                new employeePayrollData().name=name.value;
                textError.textContent = "";
    
            } catch (e){
                textError.textContent=e;
            }
        });
    });
    
    const date = document.querySelector('#date');
    date.addEventListener('input', function() {
        const startDate = new Date(Date.parse(getInputValueById('#day')+" "+
                                            getInputValueById('#month')+""+
                                            getInputValueById('#year')));
    
    try {
        (new EmployeePayrollData()).startDate = startDate;
        setTextValue('.date-error', "");
     }catch (e) {
        setTextValue('.date-error', e);
    } });
    const salary =document.querySelector('#salary');
    setTextValue('.salary-output', salary.value); 
    salary.addEventListener('input', function() { 
        setTextValue('.salary-output', salary.value);
    });
    
    checkForUpdate();
    
    ///
    
    
    const save = (event) => { 
        event.preventDefault();
        event.stopPropagation();
        try {
            setEmployeePayrollObject();
            createAndUpdateStorage(); 
            resetForm();
            window.location.replace(site_properties.home_page); 
        } catch (e) {
            return;
        }
    }
    const setEmployeePayrollObject = () => { 
        employeePayrollObj._name = getInputValueById('#name');
        employeePayrollObj._profilePic = getSelectedValues('[name=profile]').pop();
        employeePayrollObj.gender = getSelectedValues('[name=gender]').pop(); 
        employeePayrollObj._department = getSelectedValues('[name=department]'); 
        employeePayrollObt._salary = getInputValueById('#salary');
        employeePayrollObt._note = getInputValueById('#notes');
    
    let date= getInputValueById('#day')+" "+getInputValueById('#month')+
                                        " "+ getInputValueById('#year') ;
    employeePayrollObj._startDate = date;
    }
    // sethod toString() (-
const createAndUpdateStorage=() => {
    let employeePayrollList = JSON.parse(localStorage.getItem("Employee PayrollList"));
    if(employeePayrollList){
        let empPayrollData = employeePayrollList.
            find(empData=>empData._id==employeePayrollObj._id);
            if (!empPayrollData) {
                employeePayrollList.push(createEmployeePayrollData());
            } else {
                const index= employeePayrollList
                                .map(empData=> empData._id)
                                 .indexOf(empPayrollData._id);
                employeePayrollList.splice(index, 1,
                                          createEmployeePayrollData(empPayrollData._id));
                }                       
    } else{
        employeePayrollList = [createEmployeePayrollData()]
}
localStorage.setItem("Employee PayrollList", JSON.stringify(employeePayrollList))
const createEmployeePayrollData=(id)=> {
    let employeePayrollData = new EmployeePayrollData();
     if (!id) employeePayrollData.id = createNewEmployeeId();
     else employeePayrollData.id = id;
    setEmployeePayrollData(employeePayrollData);
     return employeePayrollData;
}


const setEmployeePayrollData = (employeePayrollData) => {
    try {
        employeePayrollData.name = employeePayrollObj._name;    
}   catch (e) { 
    setTextValue('.text-error', e);  
    throw e;    
}    
employeePayrollData.profilePic = employeePayrollObj._profilePic;
employeePayrollData.gender = employeePayrollObj._gender;
employeePayrollData.department = employeePayrollObj._department;
employeePayrollData.salary= employeePayrollObj._salary;
employeePayrollData.note = employeePayrollObj._note;
try {
  employeePayrollData.startDate =
    new Date(Date.parse(employeePayrollObj._startDate));
    } catch (e) {
         setTextValue('.date-error', e);
        throw e;
    }
    alert(employeePayrollData.toString());
}

const createNewEmployeeId = () => {
let empID= localStorage.getItem("EmployeeID");
empID= !empID ? 1: (parseInt(empID)+1).toString();
localStorage.setItem("EmployeeID", empID);    
return empID; 
}
  
const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach(item => {
        if(item.checked) selItems.push(item.value);
    });
    return setItems;
}
}