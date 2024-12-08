// Création des pistes + tracé
const pistes = [
  {
    nom: "Sprint Bessans 2024",
    distance: "1,2 km",
    denivele: "30m",
    planImage: "images/plan/sprint bessans 2024.jpg",
    profilImage: "images/profil/sprint bessans 2024.jpg",
  },
  {
    nom: "Distance Bessans 2024",
    distance: "2,7 km",
    denivele: "60 m",
    planImage: "images/plan/distance bessans 2024.jpg",
    profilImage: "images/profil/distance bessans 2024.jpg",
  },
];

// Fonction pour créer les cartes de pistes
function createPisteCard(piste) {
  const card = document.createElement("div");
  card.classList.add("card");

  // Nom de la piste
  const header = document.createElement("div");
  header.classList.add("header");
  header.textContent = piste.nom;
  card.appendChild(header);

  // Contenu caché (détails)
  const details = document.createElement("div");
  details.classList.add("details");

  // Informations de la piste
  const info = document.createElement("div");
  info.classList.add("info");
  info.innerHTML = `
    <p><strong>Distance:</strong> ${piste.distance}</p>
    <p><strong>Dénivelé:</strong> ${piste.denivele}</p>
  `;
  details.appendChild(info);

  // Images de la piste
  const images = document.createElement("div");
  images.classList.add("images");
  images.innerHTML = `
    <img src="${piste.planImage}" alt="Plan de la piste">
    <img src="${piste.profilImage}" alt="Profil de la piste">
  `;
  details.appendChild(images);

  // Ajout des détails cachés à la carte
  card.appendChild(details);

  // Interaction pour afficher/masquer les détails
  header.addEventListener("click", () => {
    details.style.display = details.style.display === "block" ? "none" : "block";
  });

  return card;
}

// Ajout des cartes au conteneur
const pistesList = document.getElementById("pistes-list");
pistes.forEach((piste) => {
  const card = createPisteCard(piste);
  pistesList.appendChild(card);
});