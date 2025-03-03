gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".parent",
        start: "top top",
        end: "100%",
        scrub: 2,
        pin: true,
    },
});
tl.to(".fill-line",
    {
        width: "25%"
    }
)
tl.to(".image-one",
    {
        opacity: 0
    },"0.1"
)
tl.to(".fill-line",
    {
        width: "50%"
    }
)
tl.to(".image-two",
    {
        opacity: 1
    }, "0.5"
)
tl.to(".image-two",
    {
        opacity: 0
    }
)
tl.to(".fill-line",
    {
        width: "75%"
    }
)
tl.to(".image-three",
    {
        opacity: 1
    },"1.4"
)
tl.to(".image-three",
    {
        opacity: 0
    },"0.1"
)
tl.to(".fill-line",
    {
        width: "100%"
    }
)
tl.to(".image-four",
    {
        opacity: 1
    },
)
