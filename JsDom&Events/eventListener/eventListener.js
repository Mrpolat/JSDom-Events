//Event Listeners

const btn = document.querySelector('#btnDeleteAll');

btn.addEventListener('click',function(){
    console.log('btn clicked');
})

btn.addEventListener('click',btnClick); //btn e basılması

//butona basılırsa btn clicked yazacak
function btnClick(){    
    console.log('btn clicked');
}

btn.addEventListener('mouseover'/*click */,function(e){

    let val;

    val=e;

    val= e.target;
    val = e.target.id;
    val = e.target.classList;
    val = e.type;

    console.log(val);

    e.preventDefault();


});