document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#tablet",
            start: "top top",
            end: "400%",
            scrub: 2,
            pin: true,
        },
    });

    tl.to(
        ".bottom-arrow",
        {
            bottom: "250px",
        },
        0
    );

    tl.to(
        ".image-one",
        {
            scale: 1,
        },
        0.2
    );
    tl.to(
        ".image-one",
        {
            scale: 0,
        },
        0.9
    );
    tl.to(
        ".bottom-arrow",
        {
            bottom: "330px",
        },
        0.9
    );
    tl.to(
        ".button-one",
        {
            rotate: -3,
            backgroundColor: "#A0BFCA",
        },
        1.1
    );

    tl.to(
        ".image-two",
        {
            scale: 1,
        },
        1.2
    );

    tl.to(
        ".image-two",
        {
            scale: 0,
        },
        1.9
    );
    tl.to(
        ".bottom-arrow",
        {
            bottom: "400px",
        },
        1.9
    );
    tl.to(
        ".button-one",
        {
            rotate: 0,
            backgroundColor: "#7EE49C80",
            backgroundOpacity: 0.5,
        },
        1.9
    );
    tl.to(
        ".button-two",
        {
            rotate: -3,
            backgroundColor: "#A0BFCA",
        },
        2.1
    );
    tl.to(
        ".image-three",
        {
            scale: 1,
        },
        2.2
    );
    tl.to(
        ".image-three",
        {
            scale: 0,
        },
        2.9
    );
    tl.to(
        ".bottom-arrow",
        {
            bottom: "450px",
        },
        2.9
    );
    tl.to(
        ".button-two",
        {
            rotate: 0,
            backgroundColor: "#7EE49C80",
            backgroundOpacity: 0.5,
        },
        2.9
    );
    tl.to(
        ".button-three",
        {
            rotate: -3,
            backgroundColor: "#A0BFCA",
        },
        3.1
    );
    tl.to(
        ".image-four",
        {
            scale: 1,
        },
        3.5
    );
    tl.to(
        ".image-four",
        {
            scale: 0,
        },
        4.3
    );
    tl.to(
        ".bottom-arrow",
        {
            bottom: "500px",
        },
        4.3
    );
    tl.to(
        ".button-three",
        {
            rotate: 0,
            backgroundColor: "#7EE49C80",
            backgroundOpacity: 0.5,
        },
        4.3
    );
    tl.to(
        ".button-four",
        {
            rotate: -3,
            backgroundColor: "#A0BFCA",
        },
        4.6
    );
    tl.to(
        ".image-five",
        {
            scale: 1,
        },
        4.9
    );
    tl.to(
        ".image-five",
        {
            scale: 0,
        },
        5.7
    );
    tl.to(
        ".bottom-arrow",
        {
            bottom: "550px",
        },
        5.7
    );
    tl.to(
        ".image-six",
        {
            scale: 1,
        },
        6.2
    );
    tl.to(
        ".image-six",
        {
            scale: 0,
        },
        7
    );
    tl.to(
        ".bottom-arrow",
        {
            bottom: "600px",
        },
        7
    );
    tl.to(
        ".button-four",
        {
            rotate: 0,
            backgroundColor: "#7EE49C80",
            backgroundOpacity: 0.5,
        },
        7
    );
    tl.to(
        ".button-five",
        {
            rotate: -3,
            backgroundColor: "#A0BFCA",
        },
        7.3
    );
    tl.to(
        ".image-seven",
        {
            scale: 1,
        },
        7.5
    );
});