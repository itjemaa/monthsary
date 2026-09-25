```javascript
/* =========================================================
   HAPPY MONTHSARY DAMSSS
   Romantic JavaScript Effects
========================================================= */


// =========================================================
// FLOATING HEART SYSTEM
// =========================================================

const heartsContainer =
    document.querySelector(".hearts");


function createHeart() {

    if (!heartsContainer) {
        return;
    }


    const heart =
        document.createElement("div");


    heart.classList.add("heart");


    // Random heart styles

    const heartSymbols = [

        "♥",
        "♡",
        "❤",
        "💕",
        "❣"

    ];


    heart.textContent =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];


    // Random horizontal position

    heart.style.left =
        Math.random() * 100 + "vw";


    // Random size

    const size =
        12 +
        Math.random() * 22;


    heart.style.fontSize =
        size + "px";


    // Random animation duration

    heart.style.animationDuration =
        7 +
        Math.random() * 8 +
        "s";


    // Random delay

    heart.style.animationDelay =
        Math.random() * 2 +
        "s";


    // Random horizontal movement

    const drift =
        (Math.random() - 0.5) *
        180;


    heart.style.setProperty(
        "--drift",
        drift + "px"
    );


    // Random transparency

    heart.style.opacity =
        0.2 +
        Math.random() * 0.4;


    heartsContainer.appendChild(
        heart
    );


    // Remove after animation

    setTimeout(() => {

        heart.remove();

    }, 17000);

}


// =========================================================
// INITIAL HEARTS
// =========================================================

if (heartsContainer) {

    for (
        let i = 0;
        i < 14;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 300
        );

    }

}


// =========================================================
// CONTINUOUS HEARTS
// =========================================================

setInterval(
    createHeart,
    750
);


// =========================================================
// SUBTLE CLICK HEART EFFECT
// =========================================================

document.addEventListener(
    "click",
    function(event) {

        // Don't create click effects
        // when clicking links outside
        // the main romantic experience.

        const target =
            event.target.closest(
                ".love-button, .back-button"
            );


        if (!target) {
            return;
        }


        createClickHeart(
            event.clientX,
            event.clientY
        );

    }
);


function createClickHeart(
    x,
    y
) {

    if (!heartsContainer) {
        return;
    }


    for (
        let i = 0;
        i < 7;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.classList.add("heart");


        heart.textContent = "♥";


        heart.style.position =
            "fixed";


        heart.style.left =
            x + "px";


        heart.style.top =
            y + "px";


        heart.style.bottom =
            "auto";


        heart.style.fontSize =
            12 +
            Math.random() * 12 +
            "px";


        heart.style.color =
            "rgba(241, 91, 122, 0.65)";


        heart.style.transition =
            "all 1.2s ease";


        heart.style.animation =
            "none";


        heartsContainer.appendChild(
            heart
        );


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            50 +
            Math.random() * 80;


        requestAnimationFrame(() => {

            heart.style.transform =
                `translate(
                    ${Math.cos(angle) * distance}px,
                    ${Math.sin(angle) * distance}px
                )
                scale(0.5)`;


            heart.style.opacity =
                "0";

        });


        setTimeout(() => {

            heart.remove();

        }, 1300);

    }

}
```
