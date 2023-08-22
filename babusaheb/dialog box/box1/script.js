const person=[
  {
    name:"basha",
    text: "this is new"
  },
  {
    name:"baba",
    text:"second one"
  },
  {
    name:"name",
    text:"text"
  },
  {
    name:"dinesh",
    text:"dinesh text"
  }
];

const name=document.getElementById("name");
const text=document.getElementById("text");
const btns=document.getElementById("btns");

const nextbtn=document.querySelector(".nextbtn");
const prevbtn=document.querySelector(".prevbtn");
const newbtn=document.querySelector(".newbtn");

personnew1=0;

window.addEventListener("DOMContentLoaded",function(){
  showperson(personnew1)
});

function showperson(review) {
  const item=person[review];
  person.textContent=item.name;
  person.textContent=item.text;
};