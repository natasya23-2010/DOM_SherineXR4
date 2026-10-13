function gantiGelap() {
  document.body.style.backgroundColor = "#222222";
  document.getElementById("judul").style.color = "gold";
 
  const semuaIsi = document.querySelectorAll(".isi");
  semuaIsi.forEach((p) => {
    p.style.color = "white";
  });
}
 
function gantiTerang() {
  document.body.style.backgroundColor = "white";
  document.getElementById("judul").style.color = "black";
 
  const semuaIsi = document.getElementsByClassName("isi");
  for (let i = 0; i < semuaIsi.length; i++) {
    semuaIsi[i].style.color = "black";
  }
}

function gantiHijau() {
  document.body.style.backgroundColor = "lightgreen";

  const semuaIsi = document.querySelectorAll(".isi");
  semuaIsi.forEach((p) => {
    p.style.color = "darkgreen";
  });
}

function gantiJudul() {
  document.getElementById("judul").textContent = "Sherine";
}