const get = (id) => {
  return document.getElementById(id);
};

// Windflowers
const whiteWind = get("whiteWind");
const redWind = get("redWind");
const orangeWind = get("orangeWind");
const pinkWind = get("pinkWind");
const purpleWind = get("purpleWind");
const blueWind = get("blueWind");

// Hyacinths
const whiteHya = get("whiteHya");
const redHya = get("redHya");
const yellowHya = get("yellowHya");
const purpleHya = get("purpleHya");
const orangeHya = get("orangeHya");
const blueHya = get("blueHya");
const pinkHya = get("pinkHya");

// Roses
const redRose = get("redRose");
const yelllowRose = get("yelllowRose");
const pinkRose = get("pinkRose");
const goldRose = get("goldRose");
const blueRose = get("blueRose");
const orangeRose = get("orangeRose");
const purpleRose = get("purpleRose");
const whiteRose = get("whiteRose");
const blackRose = get("blackRose");

// Mums
const whiteMum = get("whiteMum");
const redMum = get("redMum");
const yellowMum = get("yellowMum");
const pinkMum = get("pinkMum");
const purpleMum = get("purpleMum");
const greenMum = get("greenMum");

// Tulips
const redTul = get("redTul");
const yellowTul = get("yellowTul");
const whiteTul = get("whiteTul");
const purpleTul = get("purpleTul");
const pinkTul = get("pinkTul");
const orangeTul = get("orangeTul");
const blackTul = get("blackTul");

// Cosmos
const redCos = get("redCos");
const yellowCos = get("yellowCos");
const whiteCos = get("whiteCos");
const blackCos = get("blackCos");
const pinkCos = get("pinkCos");
const orangeCos = get("orangeCos");

// Panises
const yellowPan = get("yellowPan");
const whitePan = get("whitePan");
const redPan = get("redPan");
const orangePan = get("orangePan");
const bluePan = get("bluePan");
const purplePan = get("purplePan");

// Lillies
const redLil = get("redLil");
const yellowLil = get("yellowLil");
const whiteLil = get("whiteLil");
const pinkLil = get("pinkLil");
const orangeLil = get("orangeLil");
const blackLil = get("blackLil");

$(".flower").click((event) => {
  if ($(event.target).html() === "") {
    $(event.target).html("x");
    let key = event.target.id;
    localStorage.setItem(key, $(event.target).html());
    console.log(localStorage);
  } else {
    $(event.target).html("");
    let key = event.target.id;
    localStorage.removeItem(key);
    console.log(localStorage);
  }
});

// Windflowers
var whiteWindSaved = localStorage.getItem("whiteWind");
if (whiteWindSaved) {
  whiteWind.innerHTML = whiteWindSaved;
}
var redWindSaved = localStorage.getItem("redWind");
if (redWindSaved) {
  redWind.innerHTML = redWindSaved;
}
var orangeWindSaved = localStorage.getItem("orangeWind");
if (orangeWindSaved) {
  orangeWind.innerHTML = orangeWindSaved;
}
var pinkWindSaved = localStorage.getItem("pinkWind");
if (pinkWindSaved) {
  pinkWind.innerHTML = pinkWindSaved;
}
var purpleWindSaved = localStorage.getItem("purpleWind");
if (purpleWindSaved) {
  purpleWind.innerHTML = purpleWindSaved;
}
var blueWindSaved = localStorage.getItem("blueWind");
if (blueWindSaved) {
  blueWind.innerHTML = blueWindSaved;
}

// Hyacinths
var whiteHyaSaved = localStorage.getItem("whiteHya");
if (whiteHyaSaved) {
  whiteHya.innerHTML = whiteHyaSaved;
}
var redHyaSaved = localStorage.getItem("redHya");
if (redHyaSaved) {
  redHya.innerHTML = redHyaSaved;
}
var yellowHyaSaved = localStorage.getItem("yellowHya");
if (yellowHyaSaved) {
  yellowHya.innerHTML = yellowHyaSaved;
}
var purpleHyaSaved = localStorage.getItem("purpleHya");
if (purpleHyaSaved) {
  purpleHya.innerHTML = purpleHyaSaved;
}
var orangeHyaSaved = localStorage.getItem("orangeHya");
if (orangeHyaSaved) {
  orangeHya.innerHTML = orangeHyaSaved;
}
var pinkHyaSaved = localStorage.getItem("pinkHya");
if (pinkHyaSaved) {
  pinkHya.innerHTML = pinkHyaSaved;
}
var blueHyaSaved = localStorage.getItem("blueHya");
if (blueHyaSaved) {
  blueHya.innerHTML = blueHyaSaved;
}

// Roses
var redRoseSaved = localStorage.getItem("redRose");
if (redRoseSaved) {
  redRose.innerHTML = redRoseSaved;
}
var yellowRoseSaved = localStorage.getItem("yellowRose");
if (yellowRoseSaved) {
  yellowRose.innerHTML = yellowRoseSaved;
}
var pinkRoseSaved = localStorage.getItem("pinkRose");
if (pinkRoseSaved) {
  pinkRose.innerHTML = pinkRoseSaved;
}
var goldRoseSaved = localStorage.getItem("goldRose");
if (goldRoseSaved) {
  goldRose.innerHTML = goldRoseSaved;
}
var blueRoseSaved = localStorage.getItem("blueRose");
if (blueRoseSaved) {
  blueRose.innerHTML = blueRoseSaved;
}
var orangeRoseSaved = localStorage.getItem("orangeRose");
if (orangeRoseSaved) {
  orangeRose.innerHTML = orangeRoseSaved;
}
var purpleRoseSaved = localStorage.getItem("purpleRose");
if (purpleRoseSaved) {
  purpleRose.innerHTML = purpleRoseSaved;
}
var whiteRoseSaved = localStorage.getItem("whiteRose");
if (whiteRoseSaved) {
  whiteRose.innerHTML = whiteRoseSaved;
}
var blackRoseSaved = localStorage.getItem("blackRose");
if (blackRoseSaved) {
  blackRose.innerHTML = blackRoseSaved;
}

// Mums
var whiteMumSaved = localStorage.getItem("whiteMum");
if (whiteMumSaved) {
  whiteMum.innerHTML = whiteMumSaved;
}
var redMumSaved = localStorage.getItem("redMum");
if (redMumSaved) {
  redMum.innerHTML = redMumSaved;
}
var yellowMumSaved = localStorage.getItem("yellowMum");
if (yellowMumSaved) {
  yellowMum.innerHTML = yellowMumSaved;
}
var pinkMumSaved = localStorage.getItem("pinkMum");
if (pinkMumSaved) {
  pinkMum.innerHTML = pinkMumSaved;
}
var purpleMumSaved = localStorage.getItem("purpleMum");
if (purpleMumSaved) {
  purpleMum.innerHTML = purpleMumSaved;
}
var greenMumSaved = localStorage.getItem("greenMum");
if (greenMumSaved) {
  greenMum.innerHTML = greenMumSaved;
}

// Tulips
var redTulSaved = localStorage.getItem("redTul");
if (redTulSaved) {
  redTul.innerHTML = redTulSaved;
}
var yellowTulSaved = localStorage.getItem("yellowTul");
if (yellowTulSaved) {
  yellowTul.innerHTML = yellowTulSaved;
}
var whiteTulSaved = localStorage.getItem("whiteTul");
if (whiteTulSaved) {
  whiteTul.innerHTML = whiteTulSaved;
}
var purpleTulSaved = localStorage.getItem("purpleTul");
if (purpleTulSaved) {
  purpleTul.innerHTML = purpleTulSaved;
}
var pinkTulSaved = localStorage.getItem("pinkTul");
if (pinkTulSaved) {
  pinkTul.innerHTML = pinkTulSaved;
}
var orangeTulSaved = localStorage.getItem("orangeTul");
if (orangeTulSaved) {
  orangeTul.innerHTML = orangeTulSaved;
}
var blackTulSaved = localStorage.getItem("blackTul");
if (blackTulSaved) {
  blackTul.innerHTML = blackTulSaved;
}

// Cosmos
var redCosSaved = localStorage.getItem("redCos");
if (redCosSaved) {
  redCos.innerHTML = redCosSaved;
}
var yellowCosSaved = localStorage.getItem("yellowCos");
if (yellowCosSaved) {
  yellowCos.innerHTML = yellowCosSaved;
}
var whiteCosSaved = localStorage.getItem("whiteCos");
if (whiteCosSaved) {
  whiteCos.innerHTML = whiteCosSaved;
}
var blackCosSaved = localStorage.getItem("blackCos");
if (blackCosSaved) {
  blackCos.innerHTML = blackCosSaved;
}
var pinkCosSaved = localStorage.getItem("pinkCos");
if (pinkCosSaved) {
  pinkCos.innerHTML = pinkCosSaved;
}
var orangeCosSaved = localStorage.getItem("orangeCos");
if (orangeCosSaved) {
  orangeCos.innerHTML = orangeCosSaved;
}

// Pansies
var yellowPanSaved = localStorage.getItem("yellowPan");
if (yellowPanSaved) {
  yellowPan.innerHTML = yellowPanSaved;
}
var whitePanSaved = localStorage.getItem("whitePan");
if (whitePanSaved) {
  whitePan.innerHTML = whitePanSaved;
}
var orangePanSaved = localStorage.getItem("orangePan");
if (orangePanSaved) {
  orangePan.innerHTML = orangePanSaved;
}
var redPanSaved = localStorage.getItem("redPan");
if (redPanSaved) {
  redPan.innerHTML = redPanSaved;
}
var bluePanSaved = localStorage.getItem("bluePan");
if (bluePanSaved) {
  bluePan.innerHTML = bluePanSaved;
}
var purplePanSaved = localStorage.getItem("purplePan");
if (purplePanSaved) {
  purplePan.innerHTML = purplePanSaved;
}

// Lillies
var redLilSaved = localStorage.getItem("redLil");
if (redLilSaved) {
  redLil.innerHTML = redLilSaved;
}
var yellowLilSaved = localStorage.getItem("yellowLil");
if (yellowLilSaved) {
  yellowLil.innerHTML = yellowLilSaved;
}
var whiteLilSaved = localStorage.getItem("whiteLil");
if (whiteLilSaved) {
  whiteLil.innerHTML = whiteLilSaved;
}
var pinkLilSaved = localStorage.getItem("pinkLil");
if (pinkLilSaved) {
  pinkLil.innerHTML = pinkLilSaved;
}
var orangeLilSaved = localStorage.getItem("orangeLil");
if (orangeLilSaved) {
  orangeLil.innerHTML = orangeLilSaved;
}
var blackLilSaved = localStorage.getItem("blackLil");
if (blackLilSaved) {
  blackLil.innerHTML = blackLilSaved;
}

console.log(localStorage);
// localStorage.clear();
