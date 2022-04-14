const picture = document.querySelector("#visuals")
document.querySelector("form").addEventListener("submit", e =>{
    e.preventDefault();
    console.log(e)
    const data = new FormData(e.target)
    let quantity = data.get("quantity")
    console.log(quantity)
    let typeOfCoin = data.get("coins")
    console.log(typeOfCoin)
    for (let i = 0; i < quantity; i++) {
        let image = document.createElement("img");
        switch (typeOfCoin) {
            case "quarter": 
                image.src="quarter.jpg"
                break;
            case "penny": 
                image.src="penny.jpg"
                break;
            case "nickle": 
                image.src="nickle.jpg"
                break;
            case "dime": 
                image.src="dime.jpg"
                break;
            default:
                break;
        }
        picture.append(image);
        image.addEventListener("click", (e)=> {
            e.target.remove();
        })
    }
})
