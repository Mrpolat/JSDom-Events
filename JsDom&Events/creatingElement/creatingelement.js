//Creating Elements

//create element

const li = document.createElement('li');//li elemanı oluşur

//add class

li.className='list-group-item list-group-item-secondary';//oluşan li elemanına sınıf verdik

//attribute

li.setAttribute('title','new item');//oluşan li elemanına attribute atadık
li.setAttribute('data-id','5');

//text node

const text = document.createTextNode('new item');//bir text node oluşturduk

li.appendChild(text);//text node 'u oluşturulan li nin içine attık (çocuğu olarak ekledik)

const a = document.createElement('new item');//a elementini oluşturduk 
a.setAttribute('href','#');//a elementine attribute atadık
a.className='delete item float-right';//a elementine sınıf atadık
a.innerHTML='<i class="fas fa-times"></i>';//a elementi içine icon oluşturduk

//append a to li

li.appendChild(a);//a elementini li ye ekledik

document.querySelector('#task-list').appendChild(li);