//Traversing the Dom
let val;

let list = document.querySelector('.list-group');

val = list;

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;//text
val = list.childNodes[1].nodeType;//element

val = list.children[2].textContent='new item';
val = list.children[2].children;

console.log(val);

//getelement ==>htmlcollection
//queryselector ==> nodelist

/*

eğer ulaştığımız bir element ise nodeType 1 değerini döndürürür
eğer ulaştığımız bir attribute ise nodeType 2 değerini döndürürü
eğer ulaştığımız bir text ise 3 değerini döndürür
eğer ulaştığımız bir comment ise (yorum satırı) 8 değerini döndürür





*/

for(let i=0; i<list.childNodes.length;i++){

    if(list.childNodes[i].nodeType===3){
        console.log(list.childNodes);
    }
}