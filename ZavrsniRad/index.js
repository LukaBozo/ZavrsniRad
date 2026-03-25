const players = [
    "Ivan Horvat - Napadač",
    "Marko Marić - Vezni",
    "Luka Kovač - Obrana"
];

const playerList = document.getElementById("player-list");
players.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p;
    playerList.appendChild(li);
});

function showResult() {
    document.getElementById("result").textContent = "NK Sikirevci 2 - 1 Rival";
}