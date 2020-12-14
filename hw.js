var input = parseInt(window.prompt("Please enter a number from 1 to 10."), 10);
var rand = Math.floor(Math.random()*10 + 1);
while (input != rand) {
    console.log(input, " and ", rand);
    input = parseInt(window.prompt("Please enter a number from 1 to 10:"), 10);
}
alert("correct!");