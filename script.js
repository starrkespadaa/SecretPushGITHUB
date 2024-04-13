function checkPassword() {
    var passwordInput = document.getElementById("passwordInput");
    var password = passwordInput.value;
    var passwordMessage = document.getElementById("passwordMessage");
  
    // Vérification du mot de passe
    if (password === "ezio") {
      var monkeyAnimation = document.getElementById("monkeyAnimation");
      monkeyAnimation.style.backgroundImage = "url('singeok.jpg')";
      passwordMessage.innerHTML = "Mot de passe correct, bienvenue";
      passwordMessage.classList.remove("text-danger"); // Supprimer la classe de couleur de texte incorrecte
      passwordMessage.classList.add("text-success"); // Ajouter la classe de couleur de texte correcte
    } else {
      var monkeyAnimation = document.getElementById("monkeyAnimation");
      monkeyAnimation.style.backgroundImage = "url('singeno.jpg')"; // Réinitialiser l'image du singe
      passwordMessage.innerHTML = "Mot de passe incorrect";
      passwordMessage.classList.remove("text-success"); // Supprimer la classe de couleur de texte correcte
      passwordMessage.classList.add("text-danger"); // Ajouter la classe de couleur de texte incorrecte
    }
  }
  