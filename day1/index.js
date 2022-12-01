var input = require("fs").readFileSync("input.txt", "utf8");
var winner = 0
input.split("\n\n").forEach(function (group) {
    console.log("G")
    var answers = group.split("\n");
    console.log("A",answers)
    var answerd = 0
    answers.forEach(function (answer) {
        answerd += parseInt(answer)
    })
    if(answerd >= winner) {
        winner = answerd
    }
})
console.log("W",winner)