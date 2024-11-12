 const lowercase = document.getElementById("lowercase")
const uppercase = document.getElementById("uppercase")
const symbol = document.getElementById("symbols")
const number = document.getElementById("numbers")
const inputLength = document.getElementById("inputbt")
const show = document.getElementById("show")
const btn = document.getElementById("btn")
const output = document.getElementById('output')



btn.addEventListener("click",function(){
   let str="";
   let randomPassword = '';
   if (uppercase.checked){
       str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   }
   if (lowercase.checked){
       str+="abcdefghijklmnopqrstuvwxyz"
   }
   if (symbol.checked){
       str+="~!@#$%^&*()_+=-?,"
   }if (number.checked){
       str+="0123456789"
   }
   if(str == '' || inputLength.value == '' || inputLength.value <5 || inputLength.value >30){
       show.innerText = `*Enter the length and length must be lie b/w 5 - 30 and also select at least any one type*`;
       output.value = 'Loading ...';
   }
   else{

       for(let i=0;i<inputLength.value;i++){
           let index = Math.trunc(Math.random()*str.length);
         randomPassword +=  `${str.at(index)}`; 
          
           
       }
        
       output.value = randomPassword;
       show.innerText = '';
   }
  
})
