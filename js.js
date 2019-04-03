
  
var photo1=document.querySelector('.photo1');
console.log(photo1);
function lightboxEffectPhoto1(){
    showImage(photo1);
    openLightbox();
}
photo1.addEventListener('click',lightboxEffectPhoto1)

var photo2=document.querySelector('.photo2');
console.log(photo2);
function lightboxEffectPhoto2(){
    showImage(photo2);
    openLightbox();
}
photo2.addEventListener('click',lightboxEffectPhoto2)

var photo3=document.querySelector('.photo3');
console.log(photo3);
photo3.addEventListener('click',lightboxEffectPhoto3)


function lightboxEffectPhoto3(){
  showImage(photo3);
  openLightbox();
}