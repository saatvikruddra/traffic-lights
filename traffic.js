
    var red1 = document.getElementById("red")
    var red2 = document.getElementById("red1")
    var red3 = document.getElementById("red2")
    var red4 = document.getElementById("red3")

    var yellow1 = document.getElementById("yellow")
    var yellow2 = document.getElementById("yellow1")
    var yellow3 = document.getElementById("yellow2")
    var yellow4 = document.getElementById("yellow3")
    
    var green1 = document.getElementById("green")
    var green2 = document.getElementById("green1")
    var green3 = document.getElementById("green2")
    var green4 = document.getElementById("green3")

    red1.style.opacity=".1";
    yellow1.style.opacity=".1";
    green1.style.opacity=".1";

var top = setInterval(colorChangeRed, 300);
    
    function colorChangeRed(){ 
        red1.style.opacity="1";
        yellow1.style.opacity="1";
        green1.style.opacity="1";    
        // red2.style.backgroundColor = "red"
        // red3.style.backgroundColor = "red"
        // red4.style.backgroundColor = "black"
        // green4.style.backgroundColor = "green"
    }
// var middle = setTimeout(colorChangeYellow,1000);

//     function colorChangeYellow(){

//         green4.style.backgroundColor = "black" 
//         yellow1.style.backgroundColor = "yellow"
//         red1.style.backgroundColor = "black"
//         // red1.style.backgroundColor = "red"
//         yellow4.style.backgroundColor = "yellow"
        
//     }
// var bottom = setTimeout(colorChangeGreen,5000);

//     function colorChangeGreen(){ 
//         yellow4.style.backgroundColor = "black";
//         green4.style.backgroundColor = "black";
//         red4.style.backgroundColor = "red";
//         green1.style.backgroundColor= "green"
//         yellow1.style.backgroundColor = "black" 
//     }

// red1.style.backgroundColor = "illuminatedRed";
// red2.style.backgroundColor = "red";
// red3.style.backgroundColor = "red";
// green4.style.backgroundColor = "green";


// var changeColor = setInterval(colors,1000)
//     function colors(){
//         red1.style.backgroundColor = "red" ? 
//         green3.style.backgroundColor="green" : 
         
        
//     }