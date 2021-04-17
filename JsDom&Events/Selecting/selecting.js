//selecting Elements

//*single Elements */
// document.getElementByID()
// document.querySelector()

let val;

val = document.getElementById('header');
val = document.getElementById('header').id;
val = document.getElementById('header').className;

val = document.getElementById('header');
//val = val.id;
//val = val.className;

val.style.fontSize='45px';
val.style.color='red';
val.style.fontWeight='bold';

//val.style.display ='none';

document.getElementById('header').innerText='my ToDo app';

document.getElementById('header').innerText='<b> my ToDo app <b>';
document.getElementById('header').innerHTML='<b> my ToDo app <b>';

//document.querySelector()

console.log(document.querySelector('#header'));
console.log(document.querySelector('.card-header'));

console.log(document.querySelector('h1'));
console.log(document.querySelector('div'));
console.log(document.querySelector('li').style.color='red');
document.querySelector('li:last-child').style.color='blue'
document.querySelector('li:nth-child(2)').style.color='blue'
document.querySelector('li:nth-child(3)').textContent='blue'
document.querySelector('li').className='list-group-item list-group-item-primary';

document.querySelector('li').classList.add('active');
console.log(val);

// Multiple Elements
// document.getElementsByClassName()

let val;
val = document.getElementsByClassName('list-group-item');
val =   document.getElementsByClassName('list-group-item')[2];

//val=val[2];

val[1].style.color='blue';

val[1].style.fontSize='25px';

val[2].textContent='new item';

for(let i = 0; i<val.lenght;i++){
    console.log(val[i].style.color='red');
    console.log(val[i].style.color='new item');
}

//document.getElementByTagName()

val= document.getElementsByTagName('li');
val = document.getElementsByTagName('task-list');
val = val.getElementsByTagName('a');

val = document.querySelectorAll('li');//burada foreach kullanabilrisin

val.forEach(function(item,index){
    item.textContent=`${index}-hello`;
});

val = document.querySelectorAll('li:nth-child(odd)');
val.forEach(function(item){
    item.style.background='#ccc';
});

console.log(val);



