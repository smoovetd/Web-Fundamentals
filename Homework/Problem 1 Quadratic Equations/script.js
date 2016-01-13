function getInputValues(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;

    calculateResult(a,b,c);
}

function calculateResult(a,b,c){
    var determinant = Math.sqrt(b*b - 4 * a * c);
    var result;
    if( determinant == 0){
        result = "X1 = X2 = " + ((-b)/(2*a)).toFixed(2);
    } else if ( determinant > 0){
        result = "X1 = " + (((-b) - determinant)/(2*a)).toFixed(2) + "\nX2= " + (((-b) + determinant)/(2*a)).toFixed(2);
    } else {
        result = "No Real Roots"
    }

    document.getElementById("result").innerHTML = result;
}

function clearWindow(){
    document.getElementById("a").value = "";
    var b = document.getElementById("b").value = "";
    var c = document.getElementById("c").value = "";
    document.getElementById("result").innerHTML = "";
}