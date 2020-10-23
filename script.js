window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0); 

function scrollFunction() {
  let e = document.getElementById("team");
  e.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}

function handleClick(memberId) {
  var popup;
  var popupContainer = document.getElementById("popupContainer");
  var container = document.getElementById("container");
  if (memberId === "member-1") {
    popup = document.getElementById("popup-1");
  } else if (memberId === "member-2") {
    popup = document.getElementById("popup-2");
  } else if (memberId === "member-3") {
    popup = document.getElementById("popup-3");
  } else {
    popup = document.getElementById("popup-4");
  }
  popupContainer.style.display = "flex";
  popup.style.cssText += 'display: flex;';
  container.style.position = "fixed";
}
function closePopup(btnId){
  var popupContainer = document.getElementById("popupContainer");
  var container = document.getElementById("container");
  if (btnId === "btn-1") {
    popup = document.getElementById("popup-1");
  } else if (btnId === "btn-2") {
    popup = document.getElementById("popup-2");
  } else if (btnId === "btn-3") {
    popup = document.getElementById("popup-3");
  } else {
    popup = document.getElementById("popup-4");
  }
  popup.style.cssText += 'display: none;';
  popupContainer.style.display = "none";  
  container.style.position = "relative";
}
