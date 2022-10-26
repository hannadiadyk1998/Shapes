const element = document.querySelector(`#element`);

const form = document.querySelector(`form`);
const elementShape = document.querySelector (`#elementShape`);
const elementBg = document.querySelector(`#elementBg`);

form.addEventListener(`submit`, e => {
    e.preventDefault();

    element.className = elementShape.value;
    element.style.background = elementBg.value;
})