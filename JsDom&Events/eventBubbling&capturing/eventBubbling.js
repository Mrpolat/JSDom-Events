//event bubbling

//içten dışa doğru aktarım

//içten dışa aktarımı engellemek için stopPropagation() kullanılır

const form =document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const card = document.querySelector('c<.ard');
const container = document.querySelector('.container');

form.addEventListener('clik',function(e){
    console.log('form')
    e.stopPropagation();
})
cardBody.addEventListener('clik',function(e){
    console.log('card body')
    e.stopPropagation();
})

card.addEventListener('clik',function(e){
    console.log('card')
    e.stopPropagation();
})
container.addEventListener('clik',function(e){
    console.log('container')
    e.stopPropagation();
})

//Event capturing

//dıştan içe doğru aktarım 

form.addEventListener('clik',function(e){
    console.log('form')
    e.stopPropagation();
   
},true)
cardBody.addEventListener('clik',function(e){
    console.log('card body')
    e.stopPropagation();
},true)

card.addEventListener('clik',function(e){
    console.log('card')
    e.stopPropagation();
},true)
container.addEventListener('clik',function(e){
    console.log('container')
    e.stopPropagation();
},true)

//ornek example

const deleteItems = document.querySelectorAll('.fa-times');

deleteItems.forEach(function(item){
    item.addEventListener('click',function(e){
        console.log(e.target)
    })
})

const ul = document.querySelector('ul');
ul.addEventListener('clik',function(e){
   
    if(e.target.className==='fas fa-times'){
      e.target.parentElement.parentElement.remove();
        e.preventDefault();
    }
   
    // console.log(e.target);
});

//console.log(deleteItems)