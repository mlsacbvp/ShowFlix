const slides = document.querySelectorAll(".slide");
const first =document.querySelector(".one");
const five =document.querySelector(".five");
const third =document.querySelector(".third");
console.log(slides);
var counter =0;
// slides.forEach((slide,index) => {
//     slide.style.left=`${index*50}%`

    
// });

const slideImage =() => {
    slides.forEach(slide => {
       if(counter==4){
        first.style.transform =`translateX(+100%)`
        five.style.transform =`translateX(-400%)`
           
        }
        else if(counter==0){
            first.style.transform =`translateX(0%)`
            third.style.transform =`translateX(-100%)`
               
            } 
        else{
           slide.style.transform =`translateX(-${counter*100}%)`

       }
    });
}

// const slideImageN =() => {
//     slides.forEach(slide => {
//         slide.style.transform =`translateX(-${0*100}%)`
//     });
// }

const goPrev=()=>{
   if(counter==0)
{
        counter+=3;
    slideImage();
}
   else{
    counter--;
    slideImage();
   }
}

const goNext=()=>{
    if(counter==4){
      slideImage();
        counter=counter-4;     
    }
    else{
        counter++;
        slideImage();
        
    }
    console.log(counter);
}