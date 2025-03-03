gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".parent",
        start: "top top",
        end: "100%",
        scrub: 2,
        pin: true,
    },
})
tl
    .to(".fill-line",
        {
            width: "16%"
        }
    )
    .to(".image-one",
        {
            opacity: 0
        }, "0.1"
    )
    .to(".fill-line",
        {
            width: "32%",
            duratin:"2"
        }
    )
    .to(".image-two",
        {
            opacity: 1
        }, "0.5"
    )
    .to(".image-two",
        {
            opacity: 0
        }
    )
    .to(".fill-line",
        {
            width: "48%"
        }
    )
    .to(".image-three",
        {
            opacity: 1
        }, "1.4"
    )
    .to(".image-three",
        {
            opacity: 0
        }
    )
    .to(".fill-line",
        {
            width: "64%"
        }
    )
    .to(".image-four",
        {
            opacity: 1
        }, "2"
    )
    .to(".image-four",
        {
            opacity: 0
        }
    )
    .to(".fill-line",
        {
            width: "80%"
        }
    )
    .to(".image-five",
        {
            opacity: 1
        }, "3.5"
    )
    .to(".image-five",
        {
            opacity: 0
        }
    )
    .to(".fill-line",
        {
            width: "100%"
        }
    )
    .to(".image-six",
        {
            opacity: 1
        }, "4.2"
    )