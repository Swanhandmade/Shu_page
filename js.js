// -------------Lightbox.js-------------- 

function createLightbox(){
    var body = document.querySelector('body')
    var modal = document.createElement('div');
    var modalContent = document.createElement('div');
    var close = document.createElement('span');
    modal.className = "modal";
    modalContent.className = 'modal-content';
    close.className="close";
    close.innerHTML="&times;"
    close.addEventListener('click',closeLightbox);
    body.appendChild(modal);
    modal.appendChild(close);
    modal.appendChild(modalContent);
  }
  
  
  
  function showImage(image){
    var modalContent = document.querySelector('.modal-content');
    if(modalContent.firstChild){
      modalContent.removeChild(modalContent.firstChild);
    }
    
    var img = document.createElement('img');
    var imgUrl = getComputedStyle(image).backgroundImage.slice(4, -1).replace(/"/g, "");
    img.src = imgUrl;
      modalContent.appendChild(img);
  }
  
  
  function openLightbox(){
     document.querySelector(".modal").style.display = "block";
  }
  function closeLightbox(){
     document.querySelector(".modal").style.display = "none";
  }
  
  createLightbox();
  
  
  // -------------Lightbox.js--------------
  
  
var photo1=document.querySelector('.photo1');
console.log(photo1);
function lightboxEffect(){
    showImage(photo1);
    openLightbox();
}
photo2.addEventListener('click',lightboxEffect)
var photo2=document.querySelector('.photo2');
console.log(photo2);
function lightboxEffect(){
    showImage(photo2);
    openLightbox();
}
photo3.addEventListener('click',lightboxEffect)
var photo3=document.querySelector('.photo3');
console.log(photo3);
function lightboxEffect(){
    showImage(photo3);
    openLightbox();
}
photo3.addEventListener('click',lightboxEffect)