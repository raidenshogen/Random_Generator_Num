const btn=document.getElementById("btn");
const lb1=document.getElementById("lb1");
const lb2=document.getElementById("lb2");
const lb3=document.getElementById("lb3");
const min=1;
const max=7;
let rand1;
let rand2;
let rand3;

btn.onclick=function(){
    rand1= Math.floor(Math.random()*max)+min;
    rand2= Math.floor(Math.random()*max)+min;
    rand3= Math.floor(Math.random()*max)+min;
    lb1.textContent=rand1;
    lb2.textContent=rand2;
    lb3.textContent=rand3;
}