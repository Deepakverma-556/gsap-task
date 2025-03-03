gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".parent",
        start: 'top top',
        end: '+=600%',
        pin: true,
        scrub: 1,
        markers: false,
    }
});
let timeLine = gsap.timeline({
    scrollTrigger: {
        trigger: ".section",
        start: 'top top',
        end: '+=5%',
        scrub: 1,
        markers: false,
    }
})
timeLine.from(".title", {
    y: "-100%",
    opacity:0
})

    tl.to([".text-one", ".para-one"],
        {
            opacity: 0
        }
    )
    tl.to([".text-two", ".para-two"],
        {
            opacity: 1
        }
    )
    tl.to([".text-two", ".para-two"],
        {
            opacity: 0
        }
    )
    tl.to([".text-three", ".para-three"],
        {
            opacity: 1
        }
    )
    tl.to([".text-three", ".para-three"],
        {
            opacity: 0
        }
    )
    tl.to([".text-four", ".para-four"],
        {
            opacity: 1
        }
    )
    tl.to([".text-four", ".para-four"],
        {
            opacity: 0
        }
    )
    tl.to([".text-five", ".para-five"],
        {
            opacity: 1
        }
    )
    tl.to([".text-five", ".para-five"],
        {
            opacity: 0
        }
    )
    tl.to([".text-six", ".para-six"],
        {
            opacity: 1
        }
    )
    tl.to(".card-one",
        {
            opacity: 0
        }
    )
    tl.to(".img-one",
        {
            opacity: 0
        }
    )
    tl.to([".card-two",".img-two"],
        {
            opacity: 1
        }
    )
    tl.to([".card-two", ".img-two"],
        {
            opacity: 0
        }
    )
    tl.to([".card-three",".img-one"],
        {
            opacity: 1
        }
    )
    tl.to([".card-three",".img-one"],
        {
            opacity: 0
        }
    )
    tl.to([".card-four",".img-two"],
        {
            opacity: 10
        }
    )