function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.style.display =
    navLinks.style.display === "block" ? "none" : "block";
}

function openImageModal() {
  var modal = document.getElementById("imageModal");
  var modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = this.src;
}

function closeImageModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("imageModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



