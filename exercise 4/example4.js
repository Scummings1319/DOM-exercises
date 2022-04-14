document.querySelector("form").addEventListener("submit", e =>{
    e.preventDefault();
    console.log(e)
    let form = document.querySelector("form");
    const data = new FormData(form);
    let quantity = data.get("quantity");
    console.log(quantity);
    let typeOfCoin = data.get("coins");
    console.log(typeOfCoin);

    const newCoin= document.createElement("div");
    newCoin.classList.add("coin");
    newCoin.innerText= coinType

    ci
})
   
   
   
  
