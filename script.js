gsap.to("#second h1",{
    transform: "translateX(-300%)",
    scrollTrigger: {
        trigger: "#second",
        scroller: "body",
        markers: true,
        scrub: 2,
        start: "top 0",
        end: "top -400%",
        pin: true,
    }
})
