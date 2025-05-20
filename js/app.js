//Containeres
const video = document.getElementById("video");
const ceda = document.getElementById("ceda");
const certificaciones = document.getElementById("certificaciones");
const bolsa = document.getElementById("bolsa");
const faq = document.getElementById("faq");

//Navegacion
const linkVideo = document.getElementById("link-video");
const linkCeda = document.getElementById("link-ceda");
const linkCertificaciones = document.getElementById("link-certificaciones");
const linkBolsa = document.getElementById("link-bolsa");
const linkFaq = document.getElementById("link-faq");

linkVideo.addEventListener("click", (e) => {
  e.preventDefault();
  ceda.classList.add("hidden");
  certificaciones.classList.add("hidden");
  bolsa.classList.add("hidden");
  faq.classList.add("hidden");
  document.getElementById("video").classList.remove("hidden");
});
linkCeda.addEventListener("click", (e) => {
  e.preventDefault();
  ceda.classList.remove("hidden");
  certificaciones.classList.add("hidden");
  bolsa.classList.add("hidden");
  faq.classList.add("hidden");
  document.getElementById("video").classList.add("hidden");
});
linkCertificaciones.addEventListener("click", (e) => {
  e.preventDefault();
  ceda.classList.add("hidden");
  certificaciones.classList.remove("hidden");
  bolsa.classList.add("hidden");
  faq.classList.add("hidden");
  document.getElementById("video").classList.add("hidden");
});
linkBolsa.addEventListener("click", (e) => {
  e.preventDefault();
  ceda.classList.add("hidden");
  certificaciones.classList.add("hidden");
  bolsa.classList.remove("hidden");
  faq.classList.add("hidden");
  document.getElementById("video").classList.add("hidden");
});
linkFaq.addEventListener("click", (e) => {
  e.preventDefault();
  ceda.classList.add("hidden");
  certificaciones.classList.add("hidden");
  bolsa.classList.add("hidden");
  faq.classList.remove("hidden");
  document.getElementById("video").classList.add("hidden");
});
