var roundsPlayed = 0;

function isClicked(event) {
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


    /*  Create one two dimentional array - rows, containing 3 arrays for each row    */
    var rows = new Array[3];
    var upRow = new Array[3];
    var middleRow = new Array[3];
    var downRow = new Array[3];


    rows[0] = upRow;
    rows[1] = middleRow;
    rows[2] = downRow;

    /*   filling arrays with values where they are present       */
    var elementsUp = document.getElementsByClassName("up");
    var elementsMiddle =  document.getElementsByClassName("middle");
    var elementsDown = document.getElementsByClassName("down");
    var isWon = false;
    if(elementsUp[0].innerHTML !="null" && elementsUp[0].innerHTML == elementsUp[1].innerHTML && elementsUp[0].innerHTML==elementsUp[2].innerHTML){
        isWon = true;
        elementsUp[0].innerHTML.style.color="green";
        elementsUp[1].innerHTML.style.color="green";
        elementsUp[2].innerHTML.style.color="green";
    }

    if(isWon){
        alert("We have aaa Winnnerrrrr!")
    }

    /*   Check for win   */
}
