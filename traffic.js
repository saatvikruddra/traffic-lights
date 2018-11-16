    let red1 = document.getElementById("red")
    let red2 = document.getElementById("red1")
    let red3 = document.getElementById("red2")
    let red4 = document.getElementById("red3")

    let yellow1 = document.getElementById("yellow")
    let yellow2 = document.getElementById("yellow1")
    let yellow3 = document.getElementById("yellow2")
    let yellow4 = document.getElementById("yellow3")

    let green1 = document.getElementById("green")
    let green2 = document.getElementById("green1")
    let green3 = document.getElementById("green2")
    let green4 = document.getElementById("green3")

    // Default Values Set
    green1.style.opacity = "1";
    red2.style.opacity = "1";
    red3.style.opacity = "1";
    red4.style.opacity = "1";


    ///////////////////////////
    // Dedicted to Red and Green
    ///////////////////////////

    initialStage=()=>{
        green1.style.opacity=".1";
        red2.style.opacity=".1";
        red3.style.opacity=".1";
        red4.style.opacity=".1"; 
    }
    
    secondStage=()=>{
        
        red1.style.opacity="1";
        green2.style.opacity="1";
        red3.style.opacity="1";
        red4.style.opacity="1";
    }
    
    resetSecondStage=()=>{
        
        red1.style.opacity=".1";
        green2.style.opacity=".1";
        red3.style.opacity=".1";
        red4.style.opacity=".1";
    }
    thirdStage=()=>{
        
        red1.style.opacity="1";
        red2.style.opacity="1";
        green3.style.opacity="1";
        red4.style.opacity="1";    
    }
    resetThirdStage=()=>{
        
        red1.style.opacity=".1";
        red2.style.opacity=".1";
        green3.style.opacity=".1";
        red4.style.opacity=".1";    
    }
    fourthStage=()=>{
        
        red1.style.opacity="1";
        red2.style.opacity="1";
        red3.style.opacity="1";
        green4.style.opacity="1";    
    }
    resetFourthStage=()=>{
        
        red1.style.opacity=".1";
        red2.style.opacity=".1";
        red3.style.opacity=".1";
        green4.style.opacity=".1";    
        
// Resetting to Default
        green1.style.opacity="1";
        red2.style.opacity="1";
        red3.style.opacity="1";
        red4.style.opacity="1";
         main();
    }

window.onload = main =()=> {    
  
    //////////////////////////
    // Red and Green Twerking
    //////////////////////////
   let start = setTimeout(initialStage, 15000);
    
    let second = setTimeout(secondStage, 15000);
    let resetSecond = setTimeout(resetSecondStage, 30000);

    let third = setTimeout(thirdStage, 30000);
    let resetThird = setTimeout(resetThirdStage, 45000);

    let fourth = setTimeout(fourthStage, 45000);
    let resetFourth = setTimeout(resetFourthStage, 60000);

    ////////////////////////
    // Yellow Light Twerking
    ////////////////////////

    yellowLight=(light)=>{
        console.log(light);
        light.style.opacity = "1";
    }
    resetYellowLight=(light)=>{
        light.style.opacity = ".1";
    }
    let startYellow1a = setTimeout(yellowLight, 10000,yellow1);
    let resetYellow1a = setTimeout(resetYellowLight, 15000,yellow1);

    let startYellow2a = setTimeout(yellowLight, 10000,yellow2);
    let resetYellow2a = setTimeout(resetYellowLight, 15000,yellow2);

    let startYellow2b = setTimeout(yellowLight, 25000,yellow2);
    let resetYellow2b = setTimeout(resetYellowLight, 30000,yellow2);

    let startYellow3a = setTimeout(yellowLight, 25000,yellow3);
    let resetYellow3a = setTimeout(resetYellowLight, 30000,yellow3);

    let startYellow3b = setTimeout(yellowLight, 40000,yellow3);
    let resetYellow3b = setTimeout(resetYellowLight, 45000,yellow3);

    let startYellow4a = setTimeout(yellowLight, 40000,yellow4);
    let resetYellow4a = setTimeout(resetYellowLight, 45000,yellow4);

    let startYellow4b = setTimeout(yellowLight, 55000,yellow4);
    let resetYellow4b = setTimeout(resetYellowLight, 60000,yellow4);

    let startYellow1b = setTimeout(yellowLight, 55000,yellow1);
    let resetYellow1b = setTimeout(resetYellowLight, 60000,yellow1);


}