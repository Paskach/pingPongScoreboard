const body = document.getElementsByTagName('body')[0];

var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
body.onkeydown = function(e) {
  console.log(e.key);
  if(player1.style.color != "green" && player2.style.color != "green"){
  	if(e.key == "1") player1.innerHTML = parseInt(player1.innerHTML, 10) + 1;
  	if(e.key == "2") player2.innerHTML = parseInt(player2.innerHTML, 10) + 1;
  }
  if(e.key == "0") {
  	player1.innerHTML = 0;
  	player2.innerHTML = 0;
  	player1.style.color = "black";
  	player2.style.color = "black";
  }
 	var player1Score = parseInt(player1.innerHTML, 10);
  var player2Score = parseInt(player2.innerHTML, 10);
  if ((player1Score + player2Score) % 5 == 0 || e.key == "4") {
  	console.log(player1.style.textDecoration);
  	if (player1.style.textDecoration == "underline") {
    	player1.style.textDecoration = "none";
      player2.style.textDecoration = "underline";
    } else {
    	player1.style.textDecoration = "underline";
      player2.style.textDecoration = "none";
    }
  }
  if (player1Score >= 21 && player1Score > player2Score + 1) {
  	player1.style.color = "green";
  }
  if (player2Score >= 21 && player2Score > player1Score + 1) {
  	player2.style.color = "green";
  }
}