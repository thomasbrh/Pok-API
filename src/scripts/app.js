'use strict';
/* Chargement des données JSON */

var inputText = document.querySelector('.search-input');
var submit = document.querySelector('.submit');
var img = document.querySelector('.img');

submit.addEventListener('click', function() {
    var text = inputText.value;
    console.log(text);
    // creer l'url qui correspond a la valeur du champ
    var url = "https://web.mayfly.ovh/proxy/pokeapi.php?endpoint=pokemon/" + inputText.value;
    console.log(url);
    // faire un fetch pour avoir les données json

    fetch(url)
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Erreur de chargement du fichier JSON");
        }
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        // afficher le nom à l'écran
        var name = document.querySelector('.name');
        name.innerHTML = data.name;
        // remplir le src du tag img
        img.setAttribute('src', data.sprites.front_default);
        // remplir le ul vide avec les types et stats
        // Selectionne le ul 
        var listElement = document.querySelector('.list');
        // Tableau
        var listing = document.querySelector('.listing');
        //boucle dans mon tableau
        listing.forEach(function(item) {
            // item vaut chaque élément du tableau
            console.log(item);
            // créer un li
            li.innerHTML = item;
            // ajoute le li dans le ul
            listElement.appendChild(li);
        })
    })
    .catch(error => {
        console.error("Erreur lors du chargement des données", error);
    });
});