let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");
let items = document.querySelectorAll(".list .item");
let dots = document.querySelectorAll(".indicator ul li");
let number = document.querySelector(".indicator .number");

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function updateIndicators() {
    dots.forEach((dot, idx) => {
        if (idx === active) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
    // Atualiza o número do slide (com zero à esquerda)
    number.textContent = (active + 1).toString().padStart(2, "0");
}

nextButton.onclick = () => {
    let itemOld = container.querySelector(".list .item.active");
    itemOld.classList.remove("active");

    active = active + 1 > lastPosition ? 0 : active + 1;
    items[active].classList.add("active");
    updateIndicators();
};

prevButton.onclick = () => {
    let itemOld = container.querySelector(".list .item.active");
    itemOld.classList.remove("active");

    active = active - 1 < firstPosition ? lastPosition : active - 1;
    items[active].classList.add("active");
    updateIndicators();
};

// Inicializa os indicadores corretamente ao carregar a página
updateIndicators();