const taskList = document.querySelector('#task-list');

//removing element
taskList.remove();
taskList.childNodes[1].remove();
taskList.children[0].remove();

taskList.removeChild(taskList.children[0]);

//removing attribute

taskList.children[0].removeAttribute('class');

for(let i=0; i<taskList.children.length; i++){
    taskList.children[i].removeAttribute('class');
}

console.log(taskList);

//replacing elements

const cardHeader = document.querySelector('.card-header');

//create element
const h2 = document.createElement('h2');
h2.setAttribute('class','card-header');
h2.appendChild(document.createTextNode('My list'));

const parent = document.querySelector('.card');
parent.replaceChild(h2,cardHeader)
console.log(cardHeader);

//**Classes

let val;
val = taskList.children[0].firstChild;

val = link.createName;
val = link.classList;
val = link.classList[0];

link.classList.add('new');
link.classList.remove('new');
link.setAttribute('href','http://mpu.com');
val = link.hasAttribute('href');

//Attributes

val = link.getAttribute('');

console.log(taskList);