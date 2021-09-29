function showNavBar() {
    var navBarBtn = document.getElementById("navbarlist");
    if (navBarBtn.style.display === "block") {
        navBarBtn.style.display = "none";
    } else {
        navBarBtn.style.display = "block";
    }
  }

function openHome() {
    window.location = "index.html";
}

function openMenu() {
    window.location = "menu.html";
}

function openContact() {
    window.location = "contact.html";
}
