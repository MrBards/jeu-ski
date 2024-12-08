// Création des athlètes + stats
const athletes = [
  {
    name: "Clément Monnier",
	photo: "images/photo/klement-mounier.jpg",
	stats: {
		Skating: 80,
		Classique: 70,
		Endurance: 70,
		Vitesse: 70,
		Accélération: 78,
		Mental: 70,
		Agilité: 60,
		Résistance: 65,
	},
  },
  {
    name: "Luc Primet",
    photo: "images/photo/lucdulac.jpg",
	stats: {
		Skating: 85,
		Classique: 85,
		Endurance: 80,
		Vitesse: 78,
		Accélération: 75,
		Mental: 75,
		Agilité: 90,
		Résistance: 70,
	},
  },
  {
    name: "Elie Belot",
    photo: "images/photo/belottelie.jpg",
	stats: {
		Skating: 50,
		Classique: 70,
		Endurance: 60,
		Vitesse: 70,
		Accélération: 78,
		Mental: 100,
		Agilité: 70,
		Résistance: 65,
	},
  },
  {
    name: "Lennie Vincent",
    photo: "images/photo/mrbards.jpg",
	stats: {
		Skating: 75,
		Classique: 80,
		Endurance: 80,
		Vitesse: 73,
		Accélération: 78,
		Mental: 75,
		Agilité: 72,
		Résistance: 70,
	},
  },
  {
    name: "Isaïe Taxil",
    photo: "images/photo/leI.jpg",
	stats: {
		Skating: 80,
		Classique: 75,
		Endurance: 78,
		Vitesse: 78,
		Accélération: 70,
		Mental: 80,
		Agilité: 80,
		Résistance: 70,
	},
  },
  {
    name: "Pilou la mèche",
    photo: "images/photo/grosplb.jpg",
	stats: {
		Skating: 100,
		Classique: 11,
		Endurance: 70,
		Vitesse: 100,
		Accélération: 20,
		Mental: 50,
		Agilité: 0,
		Résistance: 100,
	},
  },
];

const athletesContainer = document.getElementById("athletes-container");

athletes.forEach((athlete, index) => {
  const athleteCard = document.createElement("div");
  athleteCard.classList.add("athlete-card");

  // Nom de l'athlète
  const athleteTitle = document.createElement("h2");
  athleteTitle.textContent = athlete.name;

  // Bouton pour afficher les détails
  const button = document.createElement("button");
  button.textContent = "Voir les détails";

  // Conteneur pour les détails
  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("athlete-details");

  // Ajouter la photo de l'athlète
  const athleteImage = document.createElement("img");
  athleteImage.src = athlete.photo;
  athleteImage.alt = athlete.name;

  // Conteneur pour le graphique
  const canvasContainer = document.createElement("div");
  canvasContainer.classList.add("radar-chart-container");
  const canvas = document.createElement("canvas");
  canvas.id = `radarChart-${index}`;
  canvasContainer.appendChild(canvas);

  // Ajouter les éléments au conteneur des détails
  detailsContainer.appendChild(athleteImage);
  detailsContainer.appendChild(canvasContainer);

  // Ajouter un événement pour afficher les détails
  button.addEventListener("click", () => {
    // Afficher ou masquer les détails
    detailsContainer.classList.toggle("visible");

    // Si le graphique n'existe pas encore, le créer
    if (!canvas.dataset.chartInitialized) {
      createRadarChart(canvas.id, athlete.stats);
      canvas.dataset.chartInitialized = true;
    }
  });

  // Ajouter les éléments à la carte
  athleteCard.appendChild(athleteTitle);
  athleteCard.appendChild(button);
  athleteCard.appendChild(detailsContainer);

  // Ajouter la carte au conteneur principal
  athletesContainer.appendChild(athleteCard);
});

// Fonction pour créer un graphique radar
function createRadarChart(canvasId, stats) {
  const ctx = document.getElementById(canvasId).getContext("2d");
  const labels = Object.keys(stats);
  const data = Object.values(stats);

  new Chart(ctx, {
    type: "radar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Statistiques",
          data: data,
          backgroundColor: "rgba(200, 0, 250, 0.2)",
          borderColor: "rgba(200, 0, 250, 1)",
          borderWidth: 2,
          pointBackgroundColor: "rgba(200, 0, 250, 1)",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        r: {
          ticks: { display: false },
          min: 0,
		  max: 100,
        },
      },
      plugins: {
        legend: { display: false },
      },
    },
  });
}