```javascript
/* =========================================================
   HAPPY MONTHSARY DAMSS
   Professional Romantic Effects
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const heartContainer =
        document.querySelector(".hearts");


    /* =====================================================
       FLOATING HEARTS
    ===================================================== */

    if (heartContainer) {

        const heartSymbols = [
            "♥",
            "♡",
            "❤",
            "💕",
            "❣"
        ];


        function createHeart() {

            const heart =
                document.createElement("span");

            heart.className =
                "floating-heart";

            heart.textContent =
                heartSymbols[
                    Math.floor(
                        Math.random() *
                        heartSymbols.length
                    )
                ];


            /* Random horizontal position */

            heart.style.left =
                `${Math.random() * 100}vw`;


            /* Random size */

            const size =
                12 +
                Math.random() * 23;

            heart.style.fontSize =
                `${size}px`;


            /* Random animation duration */

            const duration =
                6 +
                Math.random() * 8;

            heart.style.animationDuration =
                `${duration}s`;


            /* Random sideways movement */

            const movement =
                -120 +
                Math.random() * 240;

            heart.style.setProperty(
                "--move",
                `${movement}px`
            );


            /* Slight random transparency */

            heart.style.opacity =
                0.35 +
                Math.random() * 0.45;


            heartContainer.appendChild(
                heart
            );


            /* Remove after animation */

            window.setTimeout(() => {

                heart.remove();

            }, (duration + 1) * 1000);

        }


        /* Initial hearts */

        for (
            let i = 0;
            i < 18;
            i++
        ) {

            window.setTimeout(
                createHeart,
                i * 180
            );

        }


        /* Continuous hearts */

        window.setInterval(
            createHeart,
            500
        );

    }


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute("href");

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* =====================================================
       PAGE LOAD FADE
    ===================================================== */

    document.body.classList.add(
        "page-loaded"
    );

});
```
