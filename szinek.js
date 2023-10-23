let str=""
for(let i = 0; i <6; i++){
    str+=`<div class="box"></div>`
}
document.querySelector(".tarolo").innerHTML=str
let boxes = document.querySelectorAll(".box")
let colors=[]
for(let box of boxes){
    // console.log(box.style);
    let color=createColor()
    box.style.backgroundColor=color
    colors.push(color)
}
console.log(colors);
function createColor(){
    let red=Math.floor(Math.random()*256)
    let green=Math.floor(Math.random()*256)
    let blue=Math.floor(Math.random()*256)
    return `rgb(${red}, ${green}, ${blue})`
}
console.log(createColor());
let randindex=Math.floor(Math.random()*6)
document.querySelector('.color').innerHTML=colors[randindex]

function check(event){
    console.log(event.target.style.backgroundColor);
    let clickedColor=event.target.style.backgroundColor
    if (clickedColor==colors[randindex]){
        document.querySelector(".result").innerHTML="🚀"
    }else{
        document.querySelector(".result").innerHTML="🤔"
    }
}

