// 💖 Pluie de cœurs
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 400);

// ✍️ Effet machine à écrire
function typeWriter(element, speed = 40) {
    const text = element.innerText;
    element.innerText = "";
    let i = 0;

    function write() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i) === " " ? "&nbsp;" : text.charAt(i);
            i++;
            setTimeout(write, speed);
        }
    }
    write();
}

document.addEventListener("DOMContentLoaded", () => {
    const paragraphs = document.querySelectorAll(".love-message p");

    paragraphs.forEach((p, index) => {
        setTimeout(() => {
            typeWriter(p, 35);
        }, index * 1500);
    });
});


// ✨ Effet clic WhatsApp
function shareWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Regarde cette surprise que j’ai préparée pour toi 💕");
    window.open(`https://wa.me/?text=${text}%20${url}`, "_blank");

    for (let i = 0; i < 15; i++) {
        createHeart();
    }
}
