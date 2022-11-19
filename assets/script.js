//SHOW TIME
setInterval(function(){
    $('#time-date').text(Date())
},1000)

$('.modal-header').text('Create Todo')

$( '#date' ).datepicker();

// var newTest= document.querySelector('#project-name')

var test = document.createElement('table')
var table = document.createElement('tr')
var todo = document.getElementById('todo-name')
var date = document.getElementById('date')
var projectType = document.querySelectorAll('.dropdown-items')
var tBody = document.getElementsByTagName('tr')
var test5 = document.getElementById('test5')












$('#submit').click(function(){
    var newProj = document.createElement('td')
    var projDue = document.createElement('td')
    var projType = document.createElement('td')
    newProj.textContent = todo.value;
    for(var i = 0; i < projectType.length; i++) {
    
        projectType[i].addEventListener('click',function() {
            var selectedType;
            if(projectType[i] === true) {
                selectedType = projectType[i]
            }
        })
        console.log(selectedType)
    
    }
    
    projDue.textContent = date.value
    // newProj.textContent = todo.value;
    $('#proj-name').append(newProj)
    $('#proj-due').append(projDue)
    $('#proj-type').append(projType)

    
})











