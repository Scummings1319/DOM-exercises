document.querySelector(".fa-solid.fa-bars")
addEventListener("click", function (){
document.querySelector("ul").classList.toggle("show");
})

document.querySelector("#lettersLink")
addEventListener("click", (e) => {
    e.preventDefault();
    //show letters
    document.querySelector("#letters").style.display="block";
    //hide numbers
    document.querySelector("#numbers").style.display="none";
    //hide menu
   document.querySelector("ul").classList.toggle("show");
})

document.querySelector("#numbersLink")
addEventListener("click", (e) => {
    e.preventDefault();
    //show numbers
    document.querySelector("#numbers").style.display="block";
    //hide letters
    document.querySelector("#letters").style.display="none";
    //hide menu
   document.querySelector("ul").classList.toggle("show");
})