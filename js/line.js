gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".parent",
        start: "top top",
        end: "400%",
        scrub: 2,
        pin: true,
    },
});
tl.to(".line",
    {
        bg
    }
)
