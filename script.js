window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0); 
});

function scrollFunction1() {
  let e = document.getElementById("team");
  e.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}

let stateCheck = setInterval(() => {
  if (document.readyState === "complete") {
    clearInterval(stateCheck);
    //
    var containerHeight = document.getElementById("container").clientHeight;
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.style.height = containerHeight + "px";
  }
});
function handleClick(memberId) {
  var popup;
  var popupContainer = document.getElementById("popupContainer");
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
  popup.style.display = "flex";
}
