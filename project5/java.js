let str="";
let input=document.getElementById("first1");

const pick= (value)=>
{
  if(value ==`=`)
  {
     str=eval(input.value);
     
     
  }
  else if(value==`AC`){
     str="";

  }
  else if(value==`Del`){
     str =str.slice(0,str.length-1);

  }
  else 
   {
     str+=`${value}`;

  }
  input.value=str;
}
