 var crsr = document.querySelector(".cursor")
 var blur = document.querySelector(".cursor-blur")
document.addEventListener("mouseover",function(det) {
    crsr.style.left = det.x+"px"
    crsr.style.top = det.y+"px"
    blur.style.left = det.x - 40+"px"
    blur.style.top = det.y - 40 +"px"
    
})
 var allnavh4s = document.querySelectorAll(".navbar h4")
 allnavh4s.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
        
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid rgba(0, 128, 0, 0.171)"
        crsr.style.backgroundColor = "rgba(0, 128, 0, 0.171)"
        
    })
 })

gsap.from(".about-us img,.about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }

})





gsap.from(".card-container",{
     scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card-container",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }

})


gsap.from(".colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:".colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from(".colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:".colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from(".page4 h1",{
   y:50,
   scrollTrigger:{
    trigger:".page4 h1",
    scroller:"body",
    start:"top 75%",
    end:"top 70%",
    scrub:3
}
})
gsap.to(".navbar",{

   backgroundColor: "green",
   height:"83px",
   duration:1,
   scrollTrigger:{
      trigger:".navbar",
      scroller:"body",
    start:"top -10%",
    end:"top -11%",
    scrub:1
   }
    
})

gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
    trigger:".main",
    scroller:"body",
    start:"top -25%",
    end:"top -70%",
    scrub:2
}
})