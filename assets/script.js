//SHOW TIME
setInterval(function(){
    $('#time-date').text(Date())
},1000)

$('.modal-header').text('Create Todo')

$( '#date' ).datepicker();

// var newTest= document.querySelector('#project-name')

var submitEl = document.querySelector('#form')

var table = document.createElement('tr')
var date = document.getElementById('date')
var projectType = document.querySelectorAll('.dropdown-item')
var tBody = document.getElementsByTagName('tr')
var test5 = document.getElementById('test5')
var tableEl = document.querySelector('table')
var selectedType;
var projectNameRet
var projectTypeRet
var projectDueRet


for (var i = 0;i < projectType.length;i++) { 
projectType[i].addEventListener('click', function() {
    selectedType = this.getAttribute('value')
})

}

function addItems(e) {
    e.preventDefault();
    
    var tbodyEl = document.querySelector('tbody')
    var projectName = document.getElementById('todo-name').value
    var projectDue = document.getElementById('date').value


    
    
    localStorage.setItem('projectName', JSON.stringify(projectName))
    localStorage.setItem('projectDue', JSON.stringify(projectDue))
    localStorage.setItem('projectType', JSON.stringify(selectedType))
    
    projectNameRet = localStorage.getItem('projectName')
    projectTypeRet = localStorage.getItem('projectType')
    projectDueRet = localStorage.getItem('projectDue')


    tbodyEl.innerHTML += `
        <tr>
            <td>${JSON.parse(projectNameRet)}</td>
            <td>${JSON.parse(projectTypeRet)}</td>
            <td>${JSON.parse(projectDueRet)}</td>

            <td><button class="deleteBtn">x</button></td>
        </tr>
    `  

    
}

console.log(projectNameRet)








function deleteRow(e) {
    if(!e.target.classList.contains('deleteBtn')) {
        return;
    } 
    
    var btn = e.target;
    btn.closest('tr').remove();
}





submitEl.addEventListener('submit', addItems)
tableEl.addEventListener('click', deleteRow)








// $('#submit').click(function(e){
//     e.preventDefault()
//     var newProj = document.createElement('td')
//     var projDue = document.createElement('td')
//     newProj.textContent = todo.value;
//     projDue.textContent = date.value

//     $('#proj-name').append(newProj)
//     $('#proj-due').append(projDue)
//     $('#proj-type').append(selectedType)

   
    
// })










