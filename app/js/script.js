
// hamburger menu animation

$(".header__menu").click(function(){
    console.log("hi");
    if (document.querySelector(".header__menu").classList.contains("open")){
        $(".header__menu").removeClass("open");
    } else {
        $(".header__menu").addClass("open");
    }
    
});

// slider
const track = $(".descACM__carousel__track-container");
const slides = Array.from($(".descACM__carousel__track-container__slide"));
//console.log(slides);
const nextButton = $(".descACM__carousel__button--right");
const prevButton = $(".descACM__carousel__button--left");
const dotsNav = $(".descACM__carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, ind) => {
    slide.style.left= slideWidth * ind + 'px';
};
function slideFunction(currSlide, nextSlide, className){
    nextSlide.classList.add(className);
    currSlide.classList.remove(className);
    if (nextSlide === slides[0]){
        $(".descACM__carousel__indicator")[0].classList.add("descACM__carousel__indicator-active");
        $(".descACM__carousel__indicator")[1].classList.remove("descACM__carousel__indicator-active");
        $(".descACM__carousel__indicator")[2].classList.remove("descACM__carousel__indicator-active");
    }
    if (nextSlide === slides[1]){
        $(".descACM__carousel__indicator")[1].classList.add("descACM__carousel__indicator-active");
        $(".descACM__carousel__indicator")[0].classList.remove("descACM__carousel__indicator-active");
        $(".descACM__carousel__indicator")[2].classList.remove("descACM__carousel__indicator-active");
    }
    if (nextSlide === slides[2]){
        $(".descACM__carousel__indicator")[2].classList.add("descACM__carousel__indicator-active");
        $(".descACM__carousel__indicator")[0].classList.remove("descACM__carousel__indicator-active");
        $(".descACM__carousel__indicator")[1].classList.remove("descACM__carousel__indicator-active");
    }
}

slides.forEach(setSlidePosition);

setInterval(function(){
    var currSlide = $(".descACM__carousel__track-container__slide--active")[0];
    var nextSlide = currSlide.nextElementSibling;
    if (nextSlide === null){
         nextSlide = slides[0];
    }
    slideFunction(currSlide, nextSlide,"descACM__carousel__track-container__slide--active");
}, 10000);

 //moving right
nextButton.click(function(e) {
    var currSlide = $(".descACM__carousel__track-container__slide--active")[0];
    var nextSlide = currSlide.nextElementSibling;
    if (nextSlide === null){
         nextSlide = slides[0];
    }
    slideFunction(currSlide, nextSlide,"descACM__carousel__track-container__slide--active");
});

prevButton.click(function(e) {
    var currSlide = $(".descACM__carousel__track-container__slide--active")[0];
    var nextSlide = currSlide.previousElementSibling;
    if (nextSlide === null){
        nextSlide = slides[2];
   }
    slideFunction(currSlide, nextSlide,"descACM__carousel__track-container__slide--active");
});