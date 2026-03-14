function getNumbers(){
let a = parseFloat(document.getElementById("num1").value);
let b = parseFloat(document.getElementById("num2").value);
return [a,b];
}

function show(result){
document.getElementById("result").innerHTML="Result: "+result;
}

function add(){
let [a,b]=getNumbers();
show(a+b);
}

function sub(){
let [a,b]=getNumbers();
show(a-b);
}

function mul(){
let [a,b]=getNumbers();
show(a*b);
}

function div(){
let [a,b]=getNumbers();
show(a/b);
}

function power(){
let [a,b]=getNumbers();
show(Math.pow(a,b));
}

function sqrt(){
let [a,b]=getNumbers();
show("√"+a+" = "+Math.sqrt(a));
}

function percent(){
let [a,b]=getNumbers();
show((a/b)*100+"%");
}