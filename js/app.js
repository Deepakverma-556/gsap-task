gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".parent",
        start: 'top top',
        end: '+=400%',
        pin: true,
        scrub: 2,
        markers: false,
    }
});

tl
    .from('.title',
        {
            y: '1000%',
            opacity: 0,
        },
    )

let max = gsap.matchMedia();

max.add("(min-width:1280px)", () => {
    tl
        .from('.right-arrow-icon',
            {
                x: '-100%',
            }
        )
        .to('.card-one',
            {
                opacity: 1,
            }
        )
        .from('.back-to-top',
            {
                y: '300%',
            }
        )
        .to('.card-one',
            {
                opacity: 0,
            }
        )
        .to('.right-arrow-icon',
            {
                x: '8%',
            }
        )
        .to('.card-two',
            {
                x: '8%'
            }
        )
        .to('.card-two',
            {
                opacity: 1,
            }
        )
        .to('.back-to-top',
            {
                y: '-200%',
            }
        )
        .to('.card-two',
            {
                opacity: 0,
            }
        )
        .to('.right-arrow-icon',
            {
                x: '12%',
            }
        )
        .to('.card-three',
            {
                x: '12%'

            }
        )
        .to('.card-three',
            {
                opacity: 1,

            }
        )
        .to('.back-to-top',
            {
                y: '-400%',
            }
        )
})

max.add("(max-width:1279.99px)", () => {

    tl.fromTo('.card-one',
        {
            x: '-100%',
        }, {
            x:0,
            opacity:100
        }
    )
        .fromTo('.card-two',
            {
                x: '100%',
            },{
                x:0,
                opacity:100
            }
        )
        .fromTo('.card-three',
            {
                x: '-100%',
            }, {
                x:0,
                opacity:100
            }
        )
})
