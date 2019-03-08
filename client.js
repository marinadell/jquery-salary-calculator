console.log('js');

$(document).ready(readyNow);

function readyNow(){
    console.log('Jquery');
    $('#submit').on('click', getFirstName);
    $('#submit').on('click', getLastName);
    $('#submit').on('click', getID);
    $('#submit').on('click', getTitle);
    $('#submit').on('click', getSalary);
}

function getFirstName() {
    let firstName = $('#firstname').val();
    console.log(firstName);
}

function getLastName() {
    let lastName = $('#lastname').val();
    console.log(lastName);
}

function getID() {
    let idnum = $('#idnum').val();
    console.log(idnum);
}

function getTitle() {
    let title = $('#title').val();
    console.log(title);
}

function getSalary() {
    let aSalary = $('#salary').val();
    console.log(aSalary);
}