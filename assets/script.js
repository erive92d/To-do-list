var timeDay = document.getElementById('time-date')

setInterval(function(){
    timeDay.textContent = Date()
},1000)
