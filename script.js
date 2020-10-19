window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0)
});

function scrollFunction1() {
    let e = document.getElementById("team");
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
}

//-------------
let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
    const popup = document.querySelector(".popup");
    const container = document.querySelector(".container");
    var closeButton = document.querySelector(".popup__close");
    closeButton.addEventListener("click",function(){
      console.log(closeButton);
    popup.style.display="none";
    container.style="opacity:1;position:relative;"
}, 100);
}
});
function handleClick(memberId) { 
  var popup;
  const container = document.querySelector(".container");
  if(memberId ==="member-1")
  {
    popup = document.getElementById("popup-1")
  }
  else if(memberId ==="member-2")
  {
    popup = document.getElementById("popup-2")
  }
  else if(memberId ==="member-3")
  {
    popup = document.getElementById("popup-3")
  }
  else
  {
    popup = document.getElementById("popup-4")
  }
  var member = document.getElementById(memberId);
    popup.style.display="flex";
   // container.style="opacity:.3;"
}
