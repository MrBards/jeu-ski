let timer = 0;
let playerPosition = 0;

// Simuler les performances des adversaires
const opponents = athletes.slice(0, 4); // 4 adversaires
opponents.forEach(o => {
  o.performance = Math.random() * 10 + o.endurance; // Simuler la performance
});

// Démarrer la course
function startRace() {
  const interval = setInterval(() => {
    timer += 1; // Incrementer le temps
    document.getElementById("timer").innerText = `Temps : ${formatTime(timer)}`;
    
    // Mise à jour de la position
    playerPosition = Math.floor(Math.random() * 5); // Simuler le classement
    document.getElementById("position").innerText = `Position : ${playerPosition + 1}ème`;
  }, 1000); // Mise à jour toutes les secondes
}

// Formater le temps
function formatTime(t) {
  const minutes = Math.floor(t / 60);
  const seconds = t % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}