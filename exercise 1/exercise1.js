const main = () => {
    // create var to grab element from html
    var growelement = document.querySelector("#grow-me")
    var shrinkelement = document.querySelector("#shrink-me")


    growelement.classList.add("big");

    shrinkelement.classList.remove("big");

    var list = document.querySelectorAll("li")
    console.log(list)
    for (i = 0; i < list.length; i++) {
        console.log(list[i].textContent)
    }

    var linkelement = document.querySelector(".link")
    console.log(linkelement)

    linkelement.href = "https://www.example.com"
    linkelement.innerHTML = "somewhere";

    document.getElementById("hide-me").style.display = "none";
    document.getElementById("show-me").style.display = "block";

    // name is being set to the input value from name
    let name = document.getElementById("name").value
    //line 29 is getting value from h1 at the index value of 0, changing the text to say welcome + value from name input
    document.getElementsByTagName("h1")[0].innerHTML = `Welcome ${name}`

}