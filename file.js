let drinkType =document.querySelectorAll('.drink');
let coffeType =document.querySelectorAll('.coType');
let drinkAmount =document.querySelectorAll('.coamount');
let grindType =document.querySelectorAll('.grindType');
let deliverType =document.querySelectorAll('.deliverType');
let first =document.querySelector('.first');
let second =document.querySelector('.second');
let third =document.querySelector('.third');
let fifth =document.querySelector('.fifth');
let sixth =document.querySelector('.sixth');
let creatbtn =document.querySelector('.creat');
let howDrink=[];
let whatDrink=[];
let mytestArray=[];
let grind ='default';
let deliver ='default';
let amountDrink='default';

function decide(myArray,myvalue){
myArray.forEach((e) => {
    e.addEventListener('click',function(){
        if(!e.classList.contains('active')){
            e.classList.add('active');
            e.style.backgroundColor='darkgreen';
            myvalue.push(e.firstElementChild.innerHTML);
         }else {
        e.classList.remove('active');
        e.style.backgroundColor='gainsboro';
        myvalue.pop(e.firstElementChild.innerHTML);
        }
    })
    
});
}
function application(element,myvar){
element.forEach((e) => {
    e.addEventListener('click',function(){
        if(!e.classList.contains('active')){
            element.forEach(o=>{
                if(o.classList.contains("active")){
                    o.classList.remove('active');
               o.style.backgroundColor='gainsboro';
               mytestArray.pop(myvar);
                }
            })
            e.classList.add('active');
            e.style.backgroundColor='darkgreen';
            myvar=e.firstElementChild.innerHTML;
           mytestArray.push(myvar);
         }else {
        e.classList.remove('active');
        e.style.backgroundColor='gainsboro';
       mytestArray.pop(myvar);
        } 
        
    })
});
}
application(grindType,grind);
application(deliverType,deliver);
application(drinkAmount,amountDrink);
decide(drinkType,howDrink);
decide(coffeType,whatDrink);


creatbtn.addEventListener("click",function(){
    first.innerHTML=howDrink.join(",");
    second.innerHTML=whatDrink.join(",");
    third.innerHTML=mytestArray[0];
    fifth.innerHTML=mytestArray[1];
    sixth.innerHTML=mytestArray[2];
})
