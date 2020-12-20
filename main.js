var sqr = document.querySelectorAll(".square");
var displayColor = document.getElementById('displayColor');
var msg = document.getElementById('msg');
var reset = document.getElementById('reset');
var head = document.getElementById('head');
var hard = document.getElementById('hard');
var easy = document.getElementById('easy');

var colors = genarateRandomColor(6);
// =pickedRandomColor(colors);
var pickedColor=pickedRandomColor(colors);
displayColor.textContent=pickedColor;

 
 
for (var i = 0; i < sqr.length; i++) {
    sqr[i].style.backgroundColor = colors[i];

    sqr[i].addEventListener('click', function () {

        var clickColor = this.style.backgroundColor;
         

        // condition statment starts

        if (pickedColor=== clickColor) {
            msg.textContent = "Correct";
            reset.textContent="Play Again!"
            macthColor(pickedColor) ;
            msg.style.backgroundColor="green";
           
            
            
        } else {
            this.style.backgroundColor = "trnasparent";
            msg.textContent = "Try again";
            msg.style.backgroundColor="red";
           
        }

    })

}



function macthColor(color) {
    for (var i = 0; i < sqr.length; i++) {
        sqr[i].style.backgroundColor = color;
    }
}

function pickedRandomColor(colors){
    var randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}




// Colors array Pusing
function genarateRandomColor(num) {

    var colors = [];


    for (var i = 0; i < num; i++) {
        colors.push(randomColor());
    }

    return colors;
}






// randomColors




function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb" + "(" + r + ", " + g + ", " + b + ")";
}



 reset.addEventListener('click',function(){
      this.textContent="New Colors";
      displayColor.textContent=pickedColor;
    colors = genarateRandomColor(6);
    pickedColor=pickedRandomColor(colors);
    displayColor.style.color="white";
    for(var i=0; i<sqr.length; i++){

        sqr[i].style.backgroundColor=colors[i];
       
    }

 })


 



//  easy btn addEventLister
easy.addEventListener('click',function(){
    this.classList.add('selected');
    hard.classList.remove('selected');
    this.style.color="white";
    this.style.fontWeight="bolder";
})

hard.addEventListener('click',function(){
    this.classList.add('selected');
    easy.classList.remove('selected');
    this.style.color="white";
    this.style.fontWeight="bolder";
})
