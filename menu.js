const mediaDark = window.matchMedia("(prefers-color-scheme: dark)")
const darkmodetoggle = document.querySelector("a.dark-mode-toggle")
const darkmodetoggleText = darkmodetoggle.querySelector("span")
const bodyTag = document.querySelector('body')
const menuToggle = document.querySelector("a.menu-toggle")
const menuToggleText = menuToggle.querySelector("span")

const carousel = document.querySelectorAll("header h3, header h4")

const fadeInTimeline = gsap.timeline()
       fadeInTimeline
        .set(carousel, {opacity: 0})
        .to(carousel, {opacity: 1, delay: 1, stagger: 1, duration: 3})



carousel.forEach(caro => {

     const spanTag = caro.querySelector("span")
     const spanWidth = spanTag.clientWidth

      for(let i=4; i <80; i= i +9 ) {
          caro.appendChild(spanTag.cloneNode(true))
      }


     const movementTimeline = gsap.timeline({ repeat: -1})
     

    movementTimeline
       .set(caro, {x: 0})
       .to (caro, {x: spanWidth * -1, duration: 6, ease: "linear"})

})



menuToggle.addEventListener('click', function(){
    bodyTag.classList.toggle('nav-open')
    
    if(bodyTag.classList.contains("nav-open")) {
        menuToggleText.innerHTML = "close"
    } else {
        menuToggleText.innerHTML = "open"
    }

})







   darkmodetoggleText.addEventListener('click', function () {
         bodyTag.classList.toggle("dark-mode")

         if(bodyTag.classList.contains("dark-mode")) {
               darkmodetoggleText.innerHTML ="Light Mode"
         } else {
            darkmodetoggleText.innerHTML ="Dark Mode"
         }
   })
const updateDark = function () {
    if(mediaDark.matches) {
        bodyTag.classList.add("dark-mode")
        darkmodetoggleText.innerHTML= "Light mode"
      } else {
        bodyTag.classList.remove("dark-mode")
        darkmodetoggleText.innerHTML= "Dark mode"
      }
}

updateDark()

mediaDark.addEventListener('change', function () {
    updateDark()
})