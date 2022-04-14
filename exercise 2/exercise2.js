function navmenu(){
    document.querySelector(".box").classList.toggle("shown");
}
function showLetters(e){
    document.querySelector(".numbs").classList.add("hidden");
    document.querySelector(".alphabet").classList.remove("hidden");
    e.preventDefault()
}

function showNumbers(e){
    document.querySelector(".alphabet").classList.add("hidden");
    document.querySelector(".numbs").classList.remove("hidden");
    e.preventDefault();
}

