/*console.log("hi");

document.querySelector("#example") .innerText= "some text here";

let p = document.createElement("p");
p.innerText= "this is my paragraph";
document.body.append(p);
*/


// remove p from page
/*p.remove();*/


//1. select element
//2. addEventListener to it
//3. What do you want it to do

document.querySelector("button").addEventListener("click", () => {
    console.log("Dont click me!")
})


//eventListener being removed
// document.querySelector("button").removeEventListener("click", clickhandler )


// add button on JS
document.createElement("button");
button.innerText = "sam";

document.body.append(button);




//bubble phase_ order of operation goes from the inner most element
document.querySelector("body").addEventListener("click", () => {
    console.log("you clicked the body")
},true)
    // section
document.querySelector("section").addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("you clicked the section")
},true)
    // div
document.querySelector("div").addEventListener("click", () => {
    console.log("you clicked the div")
},true)
    // button
document.querySelector("button").addEventListener("click", (event) => {
    // event.stopPropagation();
    console.log("you clicked the button")
},)

//by adding true -it goes in order, instead of going through the bubble phase.. 
