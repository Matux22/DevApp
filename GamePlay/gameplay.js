let dimensionTerrain;
let clicks = 0;

//Définir la dimension du terrain
function init() {
    dimensionTerrain = { height: document.getElementById("terrain").clientHeight, width: document.getElementById("terrain").clientWidth };
}

//Définir la déplacement de la tête sur le terrain
function positionTete() {
    const placeTete = document.getElementById("teteTaupe");
    placeTete.style.top = Math.random() * dimensionTerrain.height + "px";
    placeTete.style.left = Math.random() * dimensionTerrain.width + "px";
}

//Déplacer la tête quand on clique dessus
function tapeTete() {
    document.getElementById("teteTaupe").onclick = positionTete;
}

//Compter le nombre de clics
function compteClic() {
    clicks++;
    console.log(clicks);
}

//Avoir un compte à rebour entre chaque changement de position
function timer() {
    setTimeout(positionTete, 5000);
    //setInterval(function () { document.getElementById("teteTaupe").click(); }, 5000);
    console.log("Yes");
}

window.onload = function () {
    init();
    positionTete();
    tapeTete();
    //timer();
}

//window.onclick = function () {
  //  compteClic();
//}
    //enchainementTete();
