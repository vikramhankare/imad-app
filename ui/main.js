//counter code
var button = document.getElementById('counter');
var counter = 0;


button.onclick = function () {
    //make a request to the counter end point
    
    //capture the response and store it in the variable
    
    //render the response in the correct span
   
    counter =counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};