start();

function getInput(input){
    var inputText = input;
    calcSupply(input.split(" ")[0],input.split(" ")[1],input.split(" ")[2],input.split(" ")[3])

}

function start(){
    var input;
    const readline = require('readline');
    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });

    rl.question('Enter your current age, max age, favourite food and ammount of that food per day? ', (answer) =>{
        getInput(answer);
    rl.close();
});

    return input;
}

function calcSupply(age, maxAge, food, foodPerDay) {
    console.log(foodPerDay*(maxAge-age)*365 + " kg of " + food + " would be enough until I am " + maxAge + " years old.")
}