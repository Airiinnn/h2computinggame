function Game() {
    document.getElementById("0").innerHTML = "<span class='dot'></span>";
    alert("game start");
    var die1;
    
    this.square = 0;

    var board = createBoard(25);

    this.hp = 20;
    this.attack = 10;
    this.money = 1000;


    this.rollDice = function() {
        die1 = Math.floor(Math.random() * 6) + 1;
        alert("Your dice is " + die1);
    };

    this.next = function() {
        if (this.hp <= 0) {
            alert("You died! Please restart!");
        } else {
            rollDice();
            document.getElementById(this.square.toString()).innerHTML = this.square.toString();
            this.square = this.square + die1;
            if (this.square > 24) { this.square = 24 }
            if (board[this.square] == "Enemy") {
                battle();
            } else if (board[this.square] == "Treasure") {
                treasure();
            } else if (board[this.square] == "Shop") {
                shop();
            } else {
                move();
            }

            if (this.hp <= 0) {
                alert("You died!");
            } else {
                document.getElementById(this.square.toString()).innerHTML = "<span class='dot'></span>";
                if (this.square == 24) {
                    alert("You win!");
                }
            }
        }
    }
}


function createBoard(size) {
    var m = [];
    for (var i = 1; i < size; i++) {
        var a = Math.floor(Math.random() * 6);
        if (a == 1) {
            document.getElementById(i.toString()).innerHTML = '<h1 class = "b1">'+i.toString()+'</h1>';
            m[i] = "Enemy";
        } else if (a == 2) {
            document.getElementById(i.toString()).innerHTML = '<h1 class = "b1">'+i.toString()+'</h1>';
            m[i] = "Enemy";
        } else if (a == 3) {
            document.getElementById(i.toString()).innerHTML = '<h1 class = "b1">'+i.toString()+'</h1>';
            m[i] = "Enemy";
        } else {
            m[i] = "Nothing";
        }
    }
    //alert(m);
    return m;
}

function question(question, correct, opt1, opt2, opt3, opt4) {
    this.question = question;
    this.opts = [opt1, opt2, opt3, opt4];
    this.correct = correct;
}

var questions = [];
questions[0] = new question("Which html tag doesnt come in pairs?", "<img>", "<h1>", "<img>", "<html>", "<p>");
questions[1] = new question("Which code will not give an error?", "print('Hello World!')", "print('Hello World!')", "print('Hello World!)", "pint('Hello World!')", "print 'Hello World!'");
questions[2] = new question("Is python case-sensitive?", "yes", "no", "yes", "Why is python?", "depends on the version");

function enemy(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
}

var enemies = [];
enemies[0] = new enemy("Troll", 10, 5);

//real code starts here
function battle() {
    //alert("i dont work!");
    var e = Math.floor(Math.random() * enemies.length);
    var emy = enemies[0];
    //alert(emy.name);
    //alert(qn.question);
	alert("You are battling a " + emy.name + "!!");
	alert("You have "+hp+" health left!!")
    while (emy.hp > 0 && hp > 0) {
        var q = Math.floor(Math.random() * questions.length);
		var qn = questions[q];
        var ans = prompt(qn.question + "\n1." + qn.opts[0] + "\n2." + qn.opts[1] + "\n3." + qn.opts[2] + "\n4." + qn.opts[3]);
        var ans = parseInt(ans) - 1;
        if (qn.opts[parseInt(ans)] == qn.correct) {
            alert("Correct! You have done " + attack + " to the " + emy.name + "!!");
            emy.hp -= attack;
			alert(emy.name + " has " + emy.hp.toString() + " health left!!");
        } else {
            alert("Wrong! You have taken " + emy.attack.toString() + " damage!!");
            hp -= emy.attack;
			alert("You have " + hp + " health left!!");
        }
    }
    enemies[0] = new enemy("Troll", 10, 5);
}

function treasure() {
    alert("treasure");
}

function shop() {
    alert("shop");
}

function move() {
    alert("moved");
}