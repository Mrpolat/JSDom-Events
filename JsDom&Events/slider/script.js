var models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/5-serisi/2021/520d-2-0'
    },
    {
        name : 'Volksvagen',
        image : 'img/Volkswagen.jpg',
        link : 'http://www.arabalar.com.tr/volkswagen/golf/2021/1-0-impression'
    },
    {
        name : 'Hyundai',
        image : 'img/hyundai.jpg',
        link : 'http://www.arabalar.com.tr/hyundai/elantra/2021/1-6-elite-cvt'
    },
    {
        name : 'Toyota',
        image : 'img/toyota.jpg',
        link : 'http://www.arabalar.com.tr/toyota/proace-city/2021/1-5-dream'
    },
    {
        name : 'Seat Tarraco',
        image : 'img/SeatTarraco.jpg',
        link : 'http://www.arabalar.com.tr/seat/tarraco/2021/1-5-fr-dsg'
    }
];

var index = 4;

var slaytcount = models.length;
var interval;
var settings={
    duration : '1000',
    random : true
};
showSlide(index);
init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
});
document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings){
    
    var prev;
    interval = setInterval(function(){
        if(settings.random){
           //random index 
           do {
            index = Math.floor( Math.random() * slaytcount); 
           } while (index ==prev);
           prev = index
        }
        else{
            //artan index
            if(slaytcount == index+1){
                index = -1;
            }
            showSlide(index);
            index++;
        }
        
        showSlide(index);
    },settings.duration)
}

function showSlide(i){

    index = i;

    if(i<0){
        index = slaytcount -1;
    }
    if(i>=slaytcount){
    index = 0;
    }
    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}

