var usedNums = new Array(25);

function newCard() {
    //Starting loop through each square card
    for (var i = 0; i < 25; i++) { //<--always this code for loops. change in red
        setSquare(i);
    }
}

function setSquare(thisSquare) {
    var currSquare = "square" + thisSquare;
    var newNum;

    var colPlace = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

    do {
        var n = getNewNum();
        newNum = colPlace[thisSquare] + n + 1;
    }
    while (usedNums[newNum]);

    usedNums[newNum] = true;
    document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum() {
    return Math.floor(Math.random() * 25);
}

function anotherCard() {
    for (var i = 1; i < usedNums.length; i++) {
        usedNums[i] = false;
    }
    cl();
    newCard();

}


/*for question*/

var used = new Array(25);
var corr = new Array(25);

function cl() {
    for (var i = 0; i < used.length; i++) {
        /*changing background*/
        var currSquare = "square" + i;
        document.getElementById(currSquare).style.background = 'white';
        //used[i] = false;
    }
    used = new Array(25);
}

function callQuestion() {
    //document.getElementById("debug").innerHTML = used;
    if (Object.keys(used).length == 25) {
        alert("BINGO IS FULL, RESTART!");
        return;
    }
    //prompt("HI")
    do {
        var n = getNewNum();
    }
    while (used[n]) {
        used[n] = true;
        question(n);
    }


}


function question(thisSquare) {
    var currSquare = "square" + thisSquare;
    var txt;

    var ans = prompt("BOX " + document.getElementById(currSquare).innerHTML + "\nEnter the answer: \n 1. print 'Hello World!' \n 2. console.log('Hello World!') \n 3. print('Hello World!') \n ", "");
    if (ans == null || ans == "") {
        txt = "E";
        document.getElementById(currSquare).style.background = 'blue';
    } else if (ans == "3") {
        alert("SUCCESS!");
        txt = "S";
        corr[currSquare] = true;
        document.getElementById(currSquare).style.background = 'green';
    } else {
        alert("FAILURE!");
        txt = "F";
        document.getElementById(currSquare).style.background = 'red';
    }
    document.getElementById(currSquare).innerHTML = txt;
    round++;
}




function hi() {
    var win = [ /*rows*/
        ["square0", "square1", "square2", "square3", "square4"],
        ["square5", "square6", "square7", "square8", "square9"],
        ["square10", "square11", "square12", "square13", "square14"],
        ["square15", "square16", "square17", "square18", "square19"],
        ["square20", "square21", "square22", "square23", "square24"],
        /*columns*/
        ["square0", "square5", "square10", "square15", "square20"],
        ["square1", "square6", "square11", "square16", "square21"],
        ["square2", "square7", "square12", "square17", "square22"],
        ["square3", "square8", "square13", "square18", "square23"],
        ["square4", "square9", "square14", "square19", "square24"],
        /*diagonal*/
        ["square0", "square6", "square12", "square18", "square24"],
        ["square4", "square8", "square12", "square16", "square20"]
    ];
    var success = true;
    for (var i = 0; i < win.length; i++) {
        success = true;
        for (var n = 0; n < 5; n++) {
            if (document.getElementById(win[i][n]).innerHTML != 'S') {
                success = false;
            }
        }
        if (success) {
            alert("BINGO!");
            break;
        }
    }
    if (success != true) {
        alert("NO BINGO!");
    }
}