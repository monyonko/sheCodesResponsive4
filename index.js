let hamburger = document.querySelector("#hamburger");
let nestedList = document.querySelector('.nested-list')

nestedList.style.display = "none";
hamburger.addEventListener('click', ()=>{
    if (nestedList.style.display === "none"){
        nestedList.style.display = "block"
        hamburger.style.transform = "rotate(160deg)"
       
    }
    else{
        nestedList.style.display = "none";
        hamburger.style.transform = "rotate(0deg)"
        console.log(nestedList)

    }
  
   
})