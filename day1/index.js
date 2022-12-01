var input = require("fs").readFileSync("input.txt", "utf8");
var elves = []
input.split("\n\n").forEach(function (group) {
    console.log("G")
    var answers = group.split("\n");
    console.log("A",answers)
    var answerd = 0
    answers.forEach(function (answer) {
        answerd += parseInt(answer)
    })
    elves.push(answerd)
})
elves.sort()
var sum = 0
for(var i = elves.length - 1; i >= elves.length-3; i--) {
   sum+=elves[i]
}
console.log(sum)

