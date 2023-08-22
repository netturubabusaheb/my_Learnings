const colors=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const color=document.querySelector(".color");
const btn=document.getElementById("btn");

btn.addEventListener("click",function(){
    let Number="#";
    for(let i=0;i<6;i++){
        Number += colors[1];
    };
    document.body.style.backgroundColor=colors.Number;
    color.textContent=colors.Number;
});