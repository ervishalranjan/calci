let btn = document.querySelectorAll('button');
let str = '';
let input = document.getElementById('first1');
btn.forEach(button=>{
   button.addEventListener('click',function(e){

      if(e.target.innerText == '='){
         try{
            str = eval(str);
         }
         catch{
            str = 'Error'
         }
      }
      else if(e.target.innerText.toUpperCase() == 'Ac'.toUpperCase()){
         str = '';
      }
      else if(e.target.innerText.toUpperCase() == 'del'.toUpperCase()){
         str = str.slice(0,str.length-1);
      }
      else{
         str += e.target.innerText;
      }
      input.value = str;
   });
})