var p1 = prompt("What is the name of Player1?").toUpperCase();
var p2 = prompt("What is the name of Player2?").toUpperCase();


document.getElementById("player1").textContent = p1;
document.getElementById("player2").textContent = p2;

if (p1 === "") {
  document.getElementById("player1").textContent = "NIC";
  var p1 = "NIC";
}
if (p2 === "") {
  document.getElementById("player2").textContent = "CAGE";
  var p2 = "CAGE";
}


function roll() {

  if (document.querySelector(".winner-p1").classList.length === 1) {
    document.querySelector(".winner-p1").classList.add("invisible");
  }
  if (document.querySelector(".loser-p1").classList.length === 1) {
    document.querySelector(".loser-p1").classList.add("invisible");
  }
  if (document.querySelector(".winner-p2").classList.length === 1) {
    document.querySelector(".winner-p2").classList.add("invisible");
  }
  if (document.querySelector(".loser-p2").classList.length === 1) {
    document.querySelector(".loser-p2").classList.add("invisible");
  }

var randomNumber1 = Math.ceil(6 * Math.random());
  var randomNumber2 = Math.ceil(6 * Math.random());

  console.log(randomNumber1);
  console.log(randomNumber2);

  document.querySelector("img.img-player1").setAttribute("src", "images/dice" + randomNumber1 + ".jpg");
  document.querySelector("img.img-player2").setAttribute("src", "images/dice" + randomNumber2 + ".jpg");

  // need to toggle visibility for winners//
  if (randomNumber1 > randomNumber2) {
    console.log(document.querySelector("#result").textContent = p1 + " Wins!!!");
    console.log(document.querySelector(".winner-p1").classList.remove("invisible"));
    console.log(document.querySelector(".loser-p2").classList.remove("invisible"));
  } else if (randomNumber1 < randomNumber2) {
    console.log(document.querySelector("#result").textContent = p2 + " Wins!!!");
    console.log(document.querySelector(".winner-p2").classList.remove("invisible"));
    console.log(document.querySelector(".loser-p1").classList.remove("invisible"));
  } else {
    console.log(document.querySelector("#result").textContent = "A boring draw... Nic would be disappointed");
  }
}
