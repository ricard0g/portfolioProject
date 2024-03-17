// Init Particles

window.onload = function() {

    // Normal options Desktop
    Particles.init({
        selector: '.background-banner',
        maxParticles: 200,
        color: '#565656',
        connectParticles: true,
        
        // Responsive Options
        responsive: [
            {
                breakpoint: 1024,
                options: {
                    maxParticles: 150
                }
            },
            {
                breakpoint: 768,
                options: {
                    maxParticles: 120,
                }
            }
        ]
    });

}
