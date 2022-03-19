const recentScore = document.getElementById("recentScore");
recentScore.innerHTML += window.localStorage.mostRecentScore;

// let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// const savePlayer = () => {
//     const newPlayer = document.getElementById("playerName").value;

// const score = {
//     score: window.localStorage.mostRecentScore,
//     playerName: newPlayer
// };
//     highScores.push(score);

// highScores.sort((a, b) => {
//     return b.score - a.score;
// })

//     localStorage.setItem("highScores", highScores);
//     console.log(highScores);
//     document.getElementById("savePrompt").innerHTML = `Saved as ${newPlayer}`;
// }

let highScores = [];

const savePlayer = () => {
    const newPlayer = document.getElementById("playerName").value;

    const score = {
        score: window.localStorage.mostRecentScore,
        playerName: newPlayer
    };

    const finalScore = JSON.stringify(score);
    const highScores = localStorage.getItem('highScores') || null;

    if (highScores !== null) {
        const value = JSON.parse(highScores);
        value.push(finalScore);
        localStorage.setItem("highScores", JSON.stringify(value));
    } else {
        const arr = [];
        arr.push(finalScore);
        const final = JSON.stringify(arr);
        localStorage.setItem('highScores', final);
    }

    document.getElementById("savePrompt").innerHTML = `Saved as ${newPlayer}`;
}

const backToMainPage = () => {
    location.assign("./index.html");
}