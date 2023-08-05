 // Get the img object using its Id
 img1 = document.getElementById("img1");
 img2 = document.getElementById("img2");
 img3 = document.getElementById("img3");
 // Function to increase image size
 function enlargeImg(n) {
    if(n===1){
         img1.style.transform = "scale(1.2)";
         img1.style.transition = "transform 0.25s ease";
         img1.style.zIndex = 9999;
    }
     // Set image size to 1.5 times original
     if(n===2){
        img2.style.transform = "scale(1.2)";
        img2.style.transition = "transform 0.25s ease";
        img2.style.zIndex = 9999;
   }
   if(n===3){
    img3.style.transform = "scale(1.2)";
    img3.style.transition = "transform 0.25s ease";
    img3.style.zIndex = 9999;
    }
     
 }
 // Function to reset image size
 function resetImg(n) {
     // Set image size to original
     if(n===1){
        img1.style.transform = "scale(1)";
        img1.style.transition = "transform 0.25s ease";
        img1.style.zIndex = 0;
     }
     if(n===2){
        img2.style.transform = "scale(1)";
        img2.style.transition = "transform 0.25s ease";
        img2.style.zIndex = 0;
     }
     
     if(n===3){
        img3.style.transform = "scale(1)";
        img3.style.transition = "transform 0.25s ease";
        img3.style.zIndex = 0;
     }

    
 }

 
 let slideIndex = 1;
 showSlides(slideIndex);
 
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }
 
 function currentSlide(n) {
   showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("dot");
   if (n > slides.length) {slideIndex = 1}    
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
 }


 