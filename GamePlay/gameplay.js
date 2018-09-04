let dimensionTerrain;


//Définir la dimension du terrain
function init() {
    dimensionTerrain = { height: document.getElementById("terrain").clientHeight, width: document.getElementById("terrain").clientWidth };
}

//Définir la déplacement de la tête sur le terrain
function mouvementTete() {
    const positionTete = document.getElementById("teteTaupe");
    positionTete.style.top = Math.random() * dimensionTerrain.height + "px";
    positionTete.style.left = Math.random() * dimensionTerrain.width + "px";
}

//Déplacer la tête quand on clique dessus
function tapeTete() {
    document.getElementById("teteTaupe").onclick = mouvementTete;
    console.log(dimensionTerrain);
}

window.onload = function () {
    init();
    mouvementTete();
    tapeTete();
}






