
let input= document.getElementById("input");
let buttons =document.querySelectorAll("button");




buttons.forEach((button)=> {
   
    button.addEventListener("click",function(){
    
 let value=button.textContent;
///input.value=input.value+value;


if (value==="Del") {
    input.value=
    input.value.slice(0, -1);
    
} 
else if(value==="Ac") {
    
    input.value="";

}
else if (value==="=") {
    input.value=eval(input.value);
    
}
else if (value==="%") {
try {
    //let expression=input.value;
    // let parts=expression.split("-");
     //let base=Number(parts[0]);
     //let percent=Number(parts[1]);
     ///let result=base-(base * percent/100)
     ///input.value=result;

     let [base, percent]=input.value.split("-").map(Number);
     input.value=base-(base * percent/100);

} catch (error) {
    console.log(error);
}
    
}
else{
    input.value += value;

}

    });

});