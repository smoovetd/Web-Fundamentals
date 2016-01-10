/**
 * Created by blagiev on 07.01.16.
 */
 function populateArea(){
    var elements = document.getElementsByClassName("radius");

    var i = 0;
    while (elements[i]){
        var radius = elements[i].innerHTML;
        document.getElementsByClassName("result")[i].innerHTML = calculateArea(radius);
        i++;
    }
}

function calculateArea(radius){
    var r = parseInt(radius, "10");
    var area = r*r*Math.PI;
    return area;
}