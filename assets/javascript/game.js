let team1 = document.querySelector("#teamone-shoot-button");
let team1shots = document.querySelector("#teamone-numshots");
let team1goals=document.querySelector("#teamone-numgoals");

team1.addEventListener("click", function () {

    console.log("team one shoot");
    let team1number = Number(team1shots.innerHTML) + 1;
    team1shots.innerHTML=team1number;
        if (Math.random() * 100 < 65 ) {
            let scoregoals=Number(team1goals.innerHTML) + 1;
        team1goals.innerHTML = scoregoals;
    }
})
// let x = document.getElementById("My Audio");
// function playAudio(){
//     x.play();
// }
// function pauseAudio() {
//     x.pause();
// }

let team2= document.querySelector("#teamtwo-shoot-button");
let team2shots = document.querySelector("#teamtwo-numshots");
let team2goals=document.querySelector("#teamtwo-numgoals")
team2.addEventListener("click", function () {
    console.log("team two shoot");
    let team2number = Number(team2shots.innerHTML)+1;
    team2shots.innerHTML=team2number;
    if (Math.random() * 100 < 65 ) {
        let scoregoals2=Number(team2goals.innerHTML) + 1;
    team2goals.innerHTML = scoregoals2;
    }

})
let resetButton = document.querySelector("#num-resets");
let numberofResets = document.querySelector("#reset-button");
numberofResets.addEventListener("click", function () {
    console.log("reset");
    let numberofResets = Number(resetButton.innerHTML) + 1;
    resetButton.innerHTML = numberofResets;
    team1shots.innerHTML = 0
    team2shots.innerHTML = 0
    team1goals.innerHTML = 0
    team2goals.innerHTML = 0
    
})
