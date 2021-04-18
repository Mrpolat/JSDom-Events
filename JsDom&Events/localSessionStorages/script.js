//LocalStorage

//tarayıcı kapansada bilgiler durur

const firstName = localStorage.setItem('firstName','Polat')

console.log(localStorage);

//session storage
//tarayıcı kapandığında bilgiler gider

let arr = ['ankara','istanbul'];

localStorage.setItem('arr',arr);//string şekilde yazar
localStorage.setItem('arr',JSON.stringify(arr));//obje şeklinde yazar

val = JSON.parse(localStorage.getItem('arr'));

console.log(val);

console.log(sessionStorage);