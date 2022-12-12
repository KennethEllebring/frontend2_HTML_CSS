function openBigCard(x) {
  document.getElementById("bigCard" + x).style.cssText = `
    height: 400px;
    border: #ffd700 5px solid; 
  `;
}
function closeBigCard(x) {
  document.getElementById("bigCard" + x).style.cssText = `
    height: 0%;
    `;
}

function info(y) {
  navSize = document.getElementById("bigCard" + y).style.height;
  if (navSize == "0%") {
    return openBigCard(1);
  } else {
    return closeBigCard(1);
  }
}
