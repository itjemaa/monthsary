```javascript
const loveButton = document.getElementById("loveButton");
const secretMessage = document.getElementById("secretMessage");
const heartsContainer = document.querySelector(".hearts");


// ------------------------------------
// OPEN LOVE MESSAGE
// ------------------------------------

loveButton.addEventListener("click", () => {

    secretMessage.classList.toggle("show");

    if (secretMessage.classList.contains("show")) {

        loveButton.querySelector("span").textContent =
            "Close my message";

        createBurst();

    } else {

        loveButton.querySelector("span").textContent =
            "Open my message";

    }

});


// ------------------------------------
// FLOATING HEARTS
// ------------------------------------

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "♥";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (12 + Math.random() * 22) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 7) + "s";

    heart.style.opacity =
        0.2 + Math.random() * 0.5;

    heartsContainer.appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 14000);

}


// Create hearts continuously

setInterval(createHeart, 900);


// ------------------------------------
// HEART BURST
// ------------------------------------

function createBurst() {

    for (let i = 0; i < 18; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "♥";

        heart.style.left = "50%";

        heart.style.bottom = "45%";

        heart.style.fontSize =
            (14 + Math.random() * 18) + "px";

        heart.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        heart.style.transform =
            `translate(${(Math.random() - 0.5) * 300}px,
             ${(Math.random() - 0.5) * 300}px)`;

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);

    }

}
```
