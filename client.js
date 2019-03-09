console.log('js');

$(document).ready(readyNow);

function readyNow(){
    console.log('Jquery');
    $('#submit').on('click', clickButton);
}
let employeeTable = []
function clickButton() {
    let clicky = new EmployeeInfo (getFirstName(), getLastName(), getID(), getTitle(), getSalary());
    employeeTable.push(clicky);
    console.log(employeeTable);
    appendEInfo();
}

function getFirstName() {
    let firstName = $('#firstname').val();
    return firstName;
}

function getLastName() {
    let lastName = $('#lastname').val();
    return lastName
}

function getID() {
    let idnum = $('#idnum').val();
    return idnum
}

function getTitle() {
    let title = $('#title').val();
    return title
}

function getSalary() {
    let aSalary = $('#salary').val();
    return aSalary;
}

class EmployeeInfo{
    constructor(fname,lname,id,title,salary){
        this.firstName = fname;
        this.lastName = lname;
        this.id = id;
        this.title = title;
        this.salary = salary;
    }
}

function appendEInfo(){
}

