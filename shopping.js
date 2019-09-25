var plus_btn = Array.from(document.querySelectorAll('.add'))
var min_btn =  Array.from(document.querySelectorAll('.sou'))
//++++++++

for(let i in plus_btn){
  plus_btn[i].addEventListener('click',function(){
let num=plus_btn[i].nextElementSibling;
num.innerHTML=Number((num.innerHTML))+1

totale()
  })

}
// ------------

for(let el of min_btn){
   el.addEventListener('click',function(){
let num=el.previousElementSibling;
if(num.innerHTML>0){
 num.innerHTML=Number((num.innerHTML))-1
}
totale()
})
}





///totale*/
function totale(){
   let mypricec=Array.from(document.querySelectorAll('.prix'))//total

let sum=0;

for(i in mypricec){
    var totale_price=document.querySelector('.totale')

   let quantity = document.querySelectorAll('.count')
   sum = sum+ Number(quantity[i].innerHTML)*Number(mypricec[i].innerHTML)
}
totale_price.innerHTML=sum
console.log(sum)

}
let like =Array.from(document.querySelectorAll('.fa-heart'));
like.map(el=>el.addEventListener('click',()=>{
  el.style.color==="green" ? el.style.color="red":el.style.color="green"
}))

    //delete list article
    let liste = document.querySelectorAll(".list")
    let remove=document.querySelectorAll('.delete');
for(let i=0;i<remove.length;i++){
    remove[i].addEventListener('click',()=>{
    
        liste[i].remove();
        totale();
    })}
    