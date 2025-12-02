let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}


























































































































































const reviews = document.querySelectorAll(".review");
let current = 0;

function updateSlider() {
    reviews.forEach((box, i) => {
        box.classList.remove("active", "left", "right");

        if (i === current) {
            box.classList.add("active");
        } else if (i === current - 1) {
            box.classList.add("left");
        } else if (i === current + 1) {
            box.classList.add("right");
        }
    });
}

document.getElementById("nextBtn").addEventListener("click", () => {
    if (current < reviews.length - 1) current++;
    updateSlider();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    if (current > 0) current--;
    updateSlider();
});

// inicializacija
updateSlider();