let viewer=document.getElementById("viewer");
let viewerImg=document.getElementById("viewerImg");
let images=document.querySelectorAll(".gallery img");
let currentIndex=0;

function openViewer(img){
viewer.style.display="flex";
viewerImg.src=img.src;

images.forEach((image,index)=>{
if(image.src===img.src){
currentIndex=index;
}
});
}

function closeViewer(){
viewer.style.display="none";
}

function nextImage(){
currentIndex=(currentIndex+1)%images.length;
viewerImg.src=images[currentIndex].src;
}

function prevImage(){
currentIndex=(currentIndex-1+images.length)%images.length;
viewerImg.src=images[currentIndex].src;
}

document.addEventListener("keydown",function(e){
if(e.key==="ArrowRight") nextImage();
if(e.key==="ArrowLeft") prevImage();
if(e.key==="Escape") closeViewer();
});

function filterSelection(category){
let cards=document.querySelectorAll(".card");
cards.forEach(card=>{
if(category==="all" || card.classList.contains(category)){
card.style.display="block";
}else{
card.style.display="none";
}
});
}
