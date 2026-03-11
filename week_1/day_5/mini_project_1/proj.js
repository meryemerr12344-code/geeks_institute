// Couleur sélectionnée
let selectedColor = "black";

// Récupération des couleurs de la palette
const colors = document.querySelectorAll(".color");
colors.forEach(color => {
  color.addEventListener("click", function() {
    selectedColor = this.style.backgroundColor; // récupère la couleur correctement
  });
});

// Variable pour savoir si la souris est pressée
let isDrawing = false;
document.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);

// Récupération de tous les carrés de la grille
const squares = document.querySelectorAll(".square");
squares.forEach(square => {
  // Dessiner au passage de la souris si isDrawing est vrai
  square.addEventListener("mouseover", function() {
    if (isDrawing) {
      this.style.backgroundColor = selectedColor;
    }
  });

  // Dessiner si l'utilisateur clique directement sur une case
  square.addEventListener("mousedown", function() {
    this.style.backgroundColor = selectedColor;
  });
});

// Optionnel : bouton pour effacer toute la grille
const clearBtn = document.querySelector("#clear");
if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    squares.forEach(sq => sq.style.backgroundColor = "white");
  });
}
