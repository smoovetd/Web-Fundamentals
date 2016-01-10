/**
 * Created by blagiev on 07.01.16.
 */
function getDecimalInput () {
    var decimal = prompt("Enter your integer number here: ", "Number");

    /* Checking is the input integer */
    if((decimal*10)%10 != "0") {
        alert("Incorect Input was entered.");
        return;
    }
    transferToHex(decimal);

}

function transferToHex(decimal){
    var decimalNumber = parseInt(decimal, "10");
    var hexNumber = decimalNumber.toString(16);

    alert("Decimal number " + decimal + " equals to " + hexNumber.toUpperCase() + " in hexademical!" );
}