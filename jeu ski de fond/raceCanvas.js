const canvas = document.getElementById("raceCanvas");
const ctx = canvas.getContext("2d");

function drawTrack() {
  ctx.fillStyle = "#fff"; // Fond neige
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#333"; // Piste
  ctx.fillRect(50, 50, canvas.width - 100, canvas.height - 100);
}

function drawPlayer(x, y) {
  ctx.fillStyle = "blue";
  ctx.fillRect(x, y, 20, 20);
}

function drawOpponents(opponents) {
  opponents.forEach((o, index) => {
    ctx.fillStyle = "red";
    ctx.fillRect(100, 100 + index * 30, 20, 20);
  });
}

function animateRace() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTrack();
  drawPlayer(100, 100);
  requestAnimationFrame(animateRace);
}

animateRace();