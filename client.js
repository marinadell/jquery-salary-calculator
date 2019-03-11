console.log('js');

const empInfo = []

$(document).ready(readyNow);

function readyNow(){
    $('#submit').on('click', addEmployeeInfo);
}

// function handleSubmit(){
//     console.log(`The click event`, event);
//     event.preventDefault();
//     addEmployeeInfo();
// }

function addEmployeeInfo(){
    if ( validateFormData() ){
        let employ = getFormData();
        empInfo.push(employ);
        clearEmployeeForm();
        render();
        calcMonthlyCost();
    }
}

function validateFormData() {
    let firName = $('#firstname').val();
    let laName = $('#lastname').val();
    let idnumber = $('#idnum').val();
    let jTitle = $('#title').val();
    let Salary = $('#salary').val();
  
    if (firName !== '' && Salary !== '') {
      return true;
    }
    return false
}

//  let employeeTable = []
//  function clickButton() {
//      let clicky = getFormData()
//      employeeTable.push(clicky);
//      console.log(employeeTable);
//      //appendEInfo();
// }

// function getFirstName() {
//     let firstName = $('#firstname').val();
//     return firstName;
// }

// function getLastName() {
//     let lastName = $('#lastname').val();
//     return lastName
// }

// function getID() {
//     let idnum = $('#idnum').val();
//     return idnum
// }

// function getTitle() {
//     let title = $('#title').val();
//     return title
// }

// function getSalary() {
//     let aSalary = $('#salary').val();
//     return aSalary;
// }

function getFormData() {
    let employeeI = {
        firstName: $('#firstname').val(),
        lastName: $('#lastname').val(),
        idnum: $('#idnum').val(),
        title: $('#title').val(),
        aSalary: $('#salary').val(),
    } 
    return employeeI;
}

function clearEmployeeForm() {
    $('#firstname').val('');
    $('#lastname').val('');
    $('#idnum').val('');
    $('#title').val('');
    $('#salary').val('')
  }

  function render(){
    $('#tableContents').empty();
    for(let employeeI of empInfo){
        let $einfo = $(`<tr><td>${employeeI.firstName}</td><td>${employeeI.lastName}</td><td>${employeeI.idnum}</td><td>${employeeI.title}</td><td>${employeeI.aSalary}</td></tr>`);
        $einfo.data(employeeI);
        console.log($einfo.data());
        $('#tableContents').append($einfo)
    }
  }

  function calcMonthlyCost() {
    let totalMonthly = 0;
    for (let i = 0; i < employeeI.length; i++) {
        totalMonthly += Number(employeeI[i].annualSalary) / 12;
    }//end for
    if (totalMonthly > 20000) {
        $('#addMonthlyTotal').css({ 'background-color': 'red' }).append('$', totalMonthly.toFixed(2));
    }//end if
    else {
        return $('#addMonthlyTotal').css({ 'background-color': 'lightgray' }).append('$', totalMonthly.toFixed(2));
    }
}
