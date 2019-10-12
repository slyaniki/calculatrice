function c(val)
{
document.getElementById("d").value=val;
}
    function v(val)
{
    if (document.getElementById("d").value[0] === "0" ) {
        document.getElementById("d").value = val;
    }else{
        document.getElementById("d").value +=val; 
    }
   
}
function off()
{
     document.getElementById("d").style.background ="black";
     document.getElementById("d").value ="0"; 
    
   
     
}
function on()
{
    document.getElementById("d").style.background="#cfe3a0";

   
     
}
[].replace
function ei() 
{  let varrr = document.getElementById("d").value
    if (varrr.includes("sin")) {
      c (  eval(varrr.replace("sin","Math.sin")))
    }else if (varrr.includes("cos")){
        c (  eval(varrr.replace("cos","Math.cos")))
    }
     else if  (varrr.includes("tan")) {
        c ( eval(varrr.replace("tan","Math.tan")))
    }else {
        console.log("entrez des valeurs correctes")
    }
   

    // try
    // {
      
    //     if (varrr.includes("sin")) {
           
            
    //         (document.getElementById("d").value)
    //     }else{
    //         (eval(document.getElementById("d").value))
    //     }
    // }
    // catch(e) 
    // {
    //     c('battard là ,ecrit bien tchr!!!') } 
}
function CE() 
{ 
     var supprimer = document.getElementById("d").value
     document.getElementById("d").value = supprimer.slice(0,supprimer.length -1)
   
}
function cos(){
    let cosinus = document.getElementById("d").value
    document.getElementById("d").value += "cos"
}
function sin(){
    var sinus = document.getElementById("d").value
    document.getElementById("d").value = Math.sin(sinus)
}
function tan(){
    var tang = document.getElementById("d").value
    document.getElementById("d").value = Math.tan(tang)
}
function sqrt(){
    var carre = document.getElementById("d").value
    document.getElementById("d").value = Math.sqrt(carre)
}
function secondF (){
    
    document.querySelector("input[value='/']").setAttribute("onclick", "v('%')");
    document.querySelector("input[value='/']").setAttribute("value", "%");
    document.querySelector("input[value='2nd']").setAttribute("onclick", "secondFm()");
}
function secondFm (){
    
    document.querySelector("input[value='%']").setAttribute("onclick", "v('/')");
    document.querySelector("input[value='%']").setAttribute("value", "/");
    document.querySelector("input[value='2nd']").setAttribute("onclick", "secondF()");
}
function exp(){
    var exp = document.getElementById("d").value
    document.getElementById("d").value = Math.exp(exp)
}
function log(){
    var log = document.getElementById("d").value
    document.getElementById("d").value = Math.log(log)
}
function pi(){
    var pi = document.getElementById("d").value
    document.getElementById("d").value = Math.pi(pi)
    return pi * Math.PI
}
function pow(){
    var pow = document.getElementById("d").value
    document.getElementById("d").value = Math.pow(pow)
}
