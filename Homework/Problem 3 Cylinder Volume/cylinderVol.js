getInput();

function getInput(){
    var inputText;
    const readline = require('readline');
    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });

    rl.question('Enter radius and height of the cylinder ', (answer) =>{
        calcCylinderVol(answer);
        rl.close();
    });


    console.log(inputText);
    return;
}

function calcCylinderVol(input){
    var radius = input.split(" ")[0];
    var height = input.split(" ")[1];

    var cylinderVol = radius*radius*Math.PI*height;

    console.log("Volume is " + cylinderVol.toFixed(3));
}

