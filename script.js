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