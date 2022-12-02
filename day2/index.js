var input = require("fs").readFileSync("input.txt", "utf8");
//A-Rock
//B-Paper
//C-Scissors

//X-Rock
//Y-Paper
//Z-Scissors
var q = {
    "A": "R",
    "B": "P",
    "C": "S",
}
var a = {
    "X": "R",
    "Y": "P",
    "Z": "S",
}

var scores = {
    "R": 1,
    "P": 2,
    "S": 3,
}
var strategy = [];
input.split("\n").forEach(function (line) {
    console.log("L",line)
    var parts = line.split(" ");
    if(parts.length == 2) {
        strategy.push({"Q":parts[0],"A":parts[1]})
    }
});
var score = 0;
function calcScore(qs,as) {
    var qScore = scores[a[as]];
    //console.log("Q",qs,"A",as,"QScore",qScore)
    if(q[qs] === a[as]) {
        qScore += 3;
        return qScore;
    }
    switch(q[qs]) {
        case "R":
            if(a[as] == "P") {
                qScore += 6;
            }
            break;
        case "P":
            if(a[as] == "S") {
                qScore += 6;
            }
            break;
        case "S":
            if(a[as] == "R") {
                qScore += 6;
            }
            break;
    }
    //console.log("Q",q[qs],"A",a[as],"QScore",qScore)
    return qScore;
}

function calcWin(qs,as){
    var qs = q[qs];
    var qScore = scores[qs];
    switch(as){
        case "Y":
            qScore += 3;
            break;
        case "X":
            switch(qs){
                case "R":
                    qScore = scores["S"];
                    break;
                case "P":
                    qScore = scores["R"];
                    break;
                case "S":
                    qScore = scores["P"];
                    break;
                }
            break;
        case "Z":
            switch(qs){
                case "R":
                    qScore = scores["P"] + 6;
                    break;
                case "P":
                    qScore = scores["S"] + 6;
                    break;
                case "S":
                    qScore = scores["R"] + 6;
                    break;

            }
            break;
    }
    return qScore;
}
    

console.log(calcWin("C","Z"))

var score = 0;
strategy.forEach(function (s) {
    var localScore = calcWin(s.Q,s.A);
    //console.log("LocalSce",localScore)
    score += localScore;
})

console.log(score)