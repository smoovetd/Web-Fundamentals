    var readline = require('readline');
    var rl = readline.createInterface(process.stdin,process.stdout);
    rl.setPrompt('Enter Value in KM : ');
    rl.prompt();
    rl.on('line', function(line){
        if(isNumber(line)){
            calcKnots(line);
            rl.close();
        }
        rl.prompt();
    }).on('close',function(){
        process.exit(0);
    });



function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function calcKnots(valueInKM){
    var knotsConst = 1.852;
    console.log("Result is: " + parseFloat(valueInKM/knotsConst).toFixed(2) + " knots!");
}
