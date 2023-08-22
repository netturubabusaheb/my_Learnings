
function myfunction(){
   var inputvalue1=document.getElementById("input").value;
   
   var get="";
   for (let i=0;i<inputvalue1.length;i++){
    get += inputvalue1[i] + "<br>" ;
   }
   var color1=["green","blue","red","orange","yellow"];
   var colors="";
   for (let i=0;i<color1.length;i++){
    colors += color1[i];
   }
   document.getElementById("table").style.color=fontcolor.colors;
  document.getElementById("table").innerHTML=get;
};

