// var text=document.getElementById("test").innerHTML="text will be defined dynamically";


// function show(){
//    const text1= document.getElementById("text").innerHTML;
//     alert (text1);
// }

// var a=10;
// var b=20;
// var c=30;
// var d=40;
// var newa=a-b;
// var newb=c-d;
// var newc=d-a;
// var para=document.createElement("h1");
// var text=document.createTextNode("a and b addition is:" + newa +" "+ "c and d addition is:" + newb );
// var para1=document.createElement("h1");
// var text1=document.createTextNode("a and b addition is:" + newa +" "+ "c and d addition is:" + newb );
// var para2=document.createElement("h1");
// var text2=document.createTextNode("d and a is:" + newc);
// para.appendChild(text);
// para1.appendChild(text1);
// para2.appendChild(text2);
// document.body.appendChild(para);
// document.body.appendChild(para1);
// document.body.appendChild(para2);


// var a=10;
// var b=20;
// b=++a;
// var para=document.createElement("h1");
// var text=document.createTextNode("value:"+b);
// para.appendChild(text);
// document.body.appendChild(para);


// function show(x){
//     if(x==5){
//        return  "equal";
//     }
//         return "notequal";
//     }
//     alert (show(5));


// function show(x){
//     if(x===5){
//        return  "equal";
//     }   
//         return "notequal";
//     }
//     alert (show("5"));



//  function show(x){
//      if(x==5){
//         return  "equal";
//      }
//     if (x>5){
//         return "greater";
//     }
//          return "smaller";
// }
//     alert (show(8));




// function viewOutput()
// {
//  'use strict'
// var no = document.getElementById('no').value;
// if( no>= 5 && no<10 )
// {
// var newParagraph = document.createElement("p");
// var newText = document.createTextNode('The number is between 5 and 10');
// newParagraph.appendChild(newText);
// document.body.appendChild(newParagraph);
// }
// else
// {
// var newParagraph1 = document.createElement("p"); 
// var newText1 = document.createTextNode('Wrong input'); 
// newParagraph1.appendChild(newText1);
// document.body.appendChild(newParagraph1); 
// }
// }


// var a="hello";
// var para=document.createElement("h1");
// var text=document.createTextNode("value:"+a);
// para.appendChild(text);
// document.body.appendChild(para);
// a +="world";
// var para1=document.createElement("h1");
// var text1=document.createTextNode("value:"+a);
// para1.appendChild(text1);
// document.body.appendChild(para1);



// function show(){
// var input=document.getElementById("marks").value;
// var marks1=(input>=30)?"pass":"fail";
// var para1=document.createElement("h1");
//  var text1=document.createTextNode(marks1);
//  para1.appendChild(text1);
//  document.body.appendChild(para1);

// }



// function show(){
//     var input=document.getElementById("marks").value;
//     if (input>=30){
//         alert("pass")
//     }
//     else {
//         alert("fail")
//     }
// }


// function show(){
//     var emp={name:"empname",number:"empnumber",address:"empaddress"};
//     if ("number" in emp){
//         alert("number is there");
//     }else{
//     alert("number is not there");
// }
// }


// function formdetails(form)
// {
// var newParagraph = document.createElement("p"); 
// var newText = document.createTextNode("The name of the form is: "+form.name); 
// newParagraph.appendChild(newText); 
// document.body.appendChild(newParagraph);

// var newParagraph1 = document.createElement("p");
// var newText1 = document.createTextNode("The deault value of text box is: "+form.text1.value);
// newParagraph1.appendChild (newText1); 
// document.body.appendChild(newParagraph1);

// var newParagraph2 = document.createElement("p"); 
// var newText2 = document.createTextNode("The name of the submit button box is: "+form.mysubmit.name); 
// newParagraph2.appendChild(newText2);
// document.body.appendChild(newParagraph2);

// var newParagraph3 = document.createElement("p");
// var newText3 = document.createTextNode("The deault value of submit button is: "+form.mysubmit.value);
// newParagraph3.appendChild(newText3);
// document.body.appendChild(newParagraph3);
// }



// function show(){
// var name="baba";
// var result=(typeof name==='string')
// alert(result);
// var number=12345;
// var result=(typeof number==='number')
// alert(result);
// }



// function show(){
//     alert("this is void function")
// }



// function show(){
//     if (document.name.text1.value>=30 && document.name.text1.value<50)
//         alert("pass");
    
//     else if(document.name.text1.value>=50 && document.name.text1.value<70)
//         alert ("grade 3")
    
//     else if(document.name.text1.value>=70 && document.name.text1.value<90)
//         alert ("grade 2")
    
//     else if(document.name.text1.value>=90 && document.name.text1.value<=100)
//         alert ("grade 1")
    
//     else if(document.name.text1.value<30)
//         alert ("fail")
    
//     else 
//         alert ("your enter wrong number")
    
// }



// function show(){
//     grade=(document.name.text1.value);
//     switch (grade)
//     {
//         case "A":
//             alert("you entered A");
//             break;
//         case "B":
//             alert("you entered B");
//             break;
//         case "C":
//             alert("you entered c");
//             break;
//         default:
//              alert("you entered none");           
//     }   
// }



    // let result="";
    // let i=0;
    // do{
    //   i=i+1;
    //   result=result+i +"<br>";
    // }
    // while (i<5);  
    // document.getElementById("test").innerHTML=result;


    // let result="";
    // let i=0;
    // while(i<5){
    //     result += "<br> the number is:" +i;
    //     i++;
    // }
    // document.getElementById("test").innerHTML=result;



    // for (let i=0;i<=10;i++) {
    //     var para=document.createElement("p");
    //     var text=document.createTextNode("here the i:" +i);
    //     para.appendChild(text);
    //     document.body.appendChild(para);
    //     if (i==4){
    //         break;
    //     }
    // }



      
    // for (let i=1;i<=10;i++) {
    //     if (i%2===0){
    //         continue;
    //     }
    //     var para=document.createElement("p");
    //     var text=document.createTextNode("here the i:" +i);
    //     para.appendChild(text);
    //     document.body.appendChild(para);
    // }



    // var key,val="";
    // var emp={name:"baba",
    //          phone:123,
    //         age:10};
    // for(key in emp){
    //     val=val+emp[key];
    // }
    // document.getElementById("test").innerHTML=val;



        // try {
        //     alert("i is equal")
        // }
        // catch(err) {
        //     alert(err)
        // }



// var emp=prompt("enter the numbers between 5 and 10:"+"");
//        try{
//         if (emp.length<5){
//         throw "error1"
//         }
//        else if(emp.length>10){
//        throw "error2"
//        }
//     }
//     catch (err){
//         if (err=="error1"){
//             alert("you have below the numbers")
//         }
//         else if(err=="error2"){
//             alert("you have exceeded the numbers")
//         }
//     }


// var a=10;
// var b=20;
// function add(){
//     return (a+b);
// }
// document.getElementById("test").innerHTML=add();



// function student1(obj){
//     obj.name="basha";
// }
// var student={name:"baba",age:10};
// var x,y;
// x=student.name;
// student1(student);
// y=student.name;
// z=x+y;
// document.getElementById("test").innerHTML=z;
//output=baba basha



// function student1(obj){
//     obj={name:"basha",age:20};
// }
// var student={name:"baba",age:10};
// var x,y;
// x=student.name;
// student1(student);
// y=student.name;
// z=x+y;
// document.getElementById("test").innerHTML=z;
//output=baba baba


// var a=1234567890;
// var b=String(a);
// alert(b);


// var fruitslist = new Array("Orange","Apple","Banana","Chery" );
// var newParagraph = document.createElement("p"); 
// var newText = document.createTextNode    ("List of Fruits : "+fruitslist); 
// newParagraph.appendChild(newText); 
// document.body.appendChild(newParagraph);
// var removeelement=fruitslist.shift();
// var newParagraph1 = document.createElement("p"); 
// var newText1 = document.createTextNode("The first element of the Fruits List : "+ removeelement); 
// newParagraph1.appendChild(newText1);
// document.body.appendChild(newParagraph1);


// function show(){
//     var letter=/^[A-Z],[a-z]+$/;
//     if (show.value.match(letter)){
//         alert("matched");
//     }
//     else {
//         alert("please enter valid letters")
//     }
// }



// function mOver(obj){
//     obj.innerHTML="hello";
// }
// function mOut(obj1){
//     obj1.innerHTML="hi";
// }



fetch('https://www.beyondklasses.com:8443/api/get-all-true-activity-centers')
.then(response => response.json())
.then(data => {
    const container=document.getElementById('container-card');
    data.forEach(item => {
        const card=document.createElement('div');
        card.className='card';

        const name=document.createElement('h2');
        name.textContent=item.name;

        const id=document.createElement('p');
        id.textContent=item.id;

        const image=document.createElement('img');
        image.src=item.file_name;
        image.alt=item.name;
        image.style='height:100px;width:150px;'


        const url=document.createElement('a');
        url.href=item.name;
        url.textContent='visit website';
        

        card.appendChild(name);
        card.appendChild(id);
        card.appendChild(image);
        card.appendChild(url);


        container.appendChild(card);
    });
})

.catch(error => console.error("error caught"+error));