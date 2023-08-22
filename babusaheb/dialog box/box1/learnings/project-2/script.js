const color=["green","red","blue","yellow"];
const btn=document.getElementById("btn");
const flipcolor=document.querySelector(".flipcolor");

btn.addEventListener("click",function(){
    const randomnumber= getRandumnumber();
   
    document.body.style.backgroundColor=color[randomnumber];
    color.textcontent;
});
function getRandumnumber(){
    return Math.floor(Math.random() * color.length);
};
