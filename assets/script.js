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

var tBody = document.querySelector('tbody')







$('#submit').click(function(){
    var newProj = document.createElement('td')
    var projDue = document.createElement('td')
    newProj.classList.add('project-name')
    projDue.classList.add('project-due')
    projDue.textContent = date.value
    newProj.textContent = todo.value;
    tBody.append(newProj,projDue)
    
})







