//Mouse Events

const btn = document.querySelector('btnDeleteAll');
const ul = document.querySelector('#task-list');

//mouse down
btn.addEventListener('click',eventHandler);
//mouse up
btn.addEventListener('mouseup',eventHandler);

//mouse down
btn.addEventListener('mousedown',eventHandler);
//mouse up
btn.addEventListener('mouseup',eventHandler);

//mouse enter
ul.addEventListener('mouseenter',eventHandler);
//mouse leave
ul.addEventListener('mouseleave',eventHandler);//ul den çıkınca çalışır

//mouse over
ul.addEventListener('mouseover',eventHandler);
//mouse out 
ul.addEventListener('mouseout',eventHandler);//ul içinde başka bir nesneye gidincede çalışır

//mouse move
const h5=document.querySelector('h5');
ul.addEventListener('mousemove', eventHandler);

function eventHandler(event){
    console.log(`eventtype :${event.type}` );
    h5.textContent=`Mouse X: ${event.offsetX}  Mouse Y: ${event.offsetY}`}
