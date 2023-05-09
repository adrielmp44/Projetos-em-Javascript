const url1 = "https://www.youtube.com/watch?v=GMxbdhoEkyY&ab_channel=TREMORDOSFLUXOS%F0%9F%94%A5%E2%98%AF%EF%B8%8F"
var btn = document.querySelector(".no");
var position
btn.addEventListener("click", function() {
position ? (position = 0) : (position = 150);
btn.style.transform = `translate(${position}px,0px)`;
btn.style.transition = "all 0.3s ease";
});

var btn = document.querySelector(".no");
var position
btn.addEventListener("mouseover", function() {
position ? (position = 0) : (position = 150);
btn.style.transform = `translate(${position}px,0px)`;
btn.style.transition = "all 0.3s ease";
});

const botao = document.getElementById("tanks")
function tanks(url1){

const win1 = window.open(url1, '_blank');
win1.focus();
}    

btn.addEventListener('tanks', () => {
    tanks(url1);
})