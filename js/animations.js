// Wait for the website to fully load before animating
document.addEventListener("DOMContentLoaded", (event) => {
    
    // Turn on the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Text Animation (Plays immediately on load)
    gsap.from(".hero-section h1, .hero-section p", {
        y: 50,           // Start 50px lower
        opacity: 0,      // Start completely invisible
        duration: 1.5,   // Take 1.5 seconds to fade in
        stagger: 0.3,    // Wait 0.3 seconds between the h1 and the p tag
        ease: "power3.out" // Smooth cinematic slowdown at the end
    });

    // 2. Amenities Cards Animation (Plays only when you scroll down)
    gsap.from(".amenity-card", {
        scrollTrigger: {
            trigger: "#amenities", // Watch this section
            start: "top 75%",      // Trigger when the section hits 75% down the screen
            toggleActions: "play none none reverse" // Play forward on scroll down, reverse on scroll up
        },
        y: 60,             // Start 60px lower
        opacity: 0,        // Start invisible
        duration: 0.8,     // Speed of the card floating up
        stagger: 0.15,     // Cascade effect: each card waits 0.15s before following the last one
        ease: "back.out(1.2)" // A highly premium, subtle "pop" effect at the end of the float
    });

});