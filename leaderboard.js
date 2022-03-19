const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const parsedArray = highScores.map((score) => {
    return JSON.parse(score);
})

const sortedArray = parsedArray.sort((a, b) => {
    return b.score - a.score;
})

let count = 1;
sortedArray.map((savedPlayer) => {
    const player = document.createElement("li");
    player.innerHTML = `${count}. ${savedPlayer.playerName} - ${savedPlayer.score}`
    count++;
    document.getElementById("highScorePlayers").appendChild(player);
})

const clearLocalStorage = () => {
    localStorage.clear();
    location.reload();
}