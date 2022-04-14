function main (){
    // 1. 
    document.querySelector("#grow-me").classList.add ("big");
    // 2.
    document.querySelector("#shrink-me").classList.remove ("big");
    //3.
    document.querySelectorAll("li").forEach(function (li){
        console.log(li.innerText)
    })
    // 4.
    let element = document.querySelector(".link")
    element.setAttribute("href","https://www.example.com")
    element.innerText= "somehwere"
    //5. 
    document.getElementById("hide-me").style.display = "none";
    //6.
    document.getElementById("show-me").style.display = "block";
    //7.
   let name=  document.getElementById("name").value 
   //document.getElementsByTagName("h1")[0].innerText= `welcome ${name}`
   document.querySelector("h1").innerText= `welcome ${name}`




}