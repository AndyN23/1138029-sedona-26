var button = document.querySelector('.choose-data');
var form = document.querySelector('.search-form');
  
form.classList.remove('nojs');
  
button.addEventListener('click', function (evt) {
evt.preventDefault();
form.classList.toggle('hiden');
});

var dateOfArrival = form.querySelector("[name=date-of-arrival]");

var minus = document.querySelector('.minus');
var plus = document.querySelector('.plus');
var result = document.querySelector('.number');
var minusKids = document.querySelector('.number-of-kids .minus');
var plusKids = document.querySelector('.number-of-kids .plus');
var resultKids = document.querySelector('.number-of-kids .number');

form.classList.add("search-form-hide");

button.addEventListener("click",function(e){
e.preventDefault();
form.classList.toggle("search-form-show");
dateOfArrival.focus();
});


minus.addEventListener('click', function(){
if (result.value > 0){
result.value--;
}
});

plus.addEventListener('click', function(){
result.value++;
});

minusKids.addEventListener('click', function(){
if (resultKids.value > 0){
resultKids.value--;
};
});

plusKids.addEventListener('click', function(){
resultKids.value++;
}); 
