var roundsPlayed = 0;
var isWon = false;

function isClicked(event) {
    if(isWon){
        return;
    }

    var isNotEmpty = event.target.textContent;
    if (isNotEmpty) {
        alert("You cannot click here!");
        return;
    }
    makeAPlay(event);
}

function makeAPlay(event){
    if(roundsPlayed % 2 == 0){
        event.target.innerHTML = "X";
        event.target.style.color = "red";
    } else {
        event.target.innerHTML = "O";
        event.target.style.color = "blue";
    }

    roundsPlayed++;
    checkForEnd();
}

function checkForEnd() {
    if(roundsPlayed<4){
        return;
    }

    /*   filling arrays with values where they are present       */
    var elements = document.getElementsByTagName("td");
    var firstRow = [3];
    var secondRow = [3];
    var thirdRow = [3];

    for(var i = 0; i < 3 ; i++){
        firstRow[i] = elements[i].innerHTML;
        secondRow[i] = elements[i+3].innerHTML;
        thirdRow[i] = elements[i + 6].innerHTML;
    }


    var winnerElements = [3];
    for(var i = 0 ; i < 3 ; i++){
        /*  Check Comuns */
        if(areThreeElementsEqualElements(firstRow[i], secondRow[i], thirdRow[i])){
            isWon= true;
          winnerElements = [elements[i], elements[i+3], elements[i+6]];
            break;
        }

        /*  Check first Row */
        if(i == 0 && areThreeElementsEqualElements(firstRow[i], firstRow[i+1], firstRow[i+2])){
            isWon= true;
            winnerElements = [elements[i], elements[i+1], elements[i+2]];
            break;
        }

        /*  Check second Row */
        if(i == 0 && areThreeElementsEqualElements(secondRow[i], secondRow[i+1], secondRow[i+2])){
            isWon= true;
            winnerElements = [elements[i+3], elements[i+4], elements[i+5]];
            break;
        }

        /*  Check third Row */
        if(i == 0 && areThreeElementsEqualElements(thirdRow[i], thirdRow[i+1], thirdRow[i+2])){
            isWon= true;
            winnerElements = [elements[i+6], elements[i+7], elements[i+8]];
            break;
        }

        /*  Check diagonal first Row  - third Row*/
        if(i == 0 && areThreeElementsEqualElements(firstRow[i], secondRow[i+1], thirdRow[i+2])){
            isWon= true;
            winnerElements = [elements[i], elements[i+4], elements[i+8]];
            break;
        }

        /*  Check diagonal third Row  - first Row*/
        if(i == 0 && areThreeElementsEqualElements(thirdRow[i], secondRow[i+1], firstRow[i+2])){
            isWon= true;
            winnerElements = [elements[i + 6], elements[i+4], elements[i+2]];
            break;
        }
    }

    if(isWon){
        alert("We have aaa Winnnerrrrr!")
        for(var i = 0; i < 3 ; i++){
            winnerElements[i].style.color = "green";
        }
    }

    /*   Check for win   */
}

function areThreeElementsEqualElements(firstElement, secondElement, thirdElement){
    if(firstElement!="" && firstElement == secondElement && firstElement == thirdElement){
        return true;
    } else {
        return false;
    }
}