let string= "";
let buttons=document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('mouseover',function(){
        console.log("clicked");
    })
})
Array.from(buttons).forEach((btn)=>{
btn.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='=')
    {
        string = string.replaceAll("%", "*(1/100)*")
        string=eval(string.replaceAll("^", "**"));
        document.querySelector('.input').innerHTML=string;
    }
    else if(e.target.innerHTML=='c')
    {
        string="";
        document.querySelector('.input').innerHTML=string;
    }
    else if(e.target.innerHTML=='X'){
        string = string.toString()
        string = string.slice(0, string.length - 1)
    document.querySelector('.input').innerHTML=string;
      }
    //   else if(e.target.innerHTML=='^'){
    // string=string+"**"
    //     document.querySelector('input').value=string;

    //   }
    else{
    console.log(e.target)
    string=string+e.target.innerHTML;
    document.querySelector('.input').innerHTML=string;
    }
})
})