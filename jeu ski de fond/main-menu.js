function showMenu(menu) {
  const mainMenu = document.getElementById("main-menu");
  const subMenu = document.getElementById("sub-menu");
  mainMenu.style.display = "none";
  subMenu.style.display = "block";

  switch (menu) {
    case "play":
      window.location.href = "courses.html"; // Redirige vers le menu de course
      break;
    case "pistes":
      loadPistesMenu(subMenu);
      break;
    case "athletes":
      loadAthletesMenu(subMenu);
      break;
    case "options":
      subMenu.innerHTML = "<h2>Options</h2><p>À venir...</p>";
      break;
    default:
      console.error("Menu inconnu");
  }
}

function goBack() {
  const mainMenu = document.getElementById("main-menu");
  const subMenu = document.getElementById("sub-menu");
  mainMenu.style.display = "block";
  subMenu.style.display = "none";
  subMenu.innerHTML = ""; // Réinitialise le contenu du sous-menu
}