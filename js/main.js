'use strict';

// Burger menu
let burgerBtn = document.querySelector('.header__burger-button'),
    burgerMenu = document.querySelector('.header__burger-menu'),
    body = document.querySelector('body');

burgerBtn.onclick = () => {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    body.classList.toggle('active');
}

// Range slider element
let slider = document.querySelector('.order__form-range');
let sliderValue = document.getElementById('rangeValue');
sliderValue.innerText = `${slider.value}%`;
slider.oninput = () => {
    sliderValue.innerText = '';
    sliderValue.innerText = `${slider.value}%`;
};

// Select
let select = document.querySelector('.select'),
    wrapper = document.querySelector('.select-wrapper'),
    selectElements = document.querySelectorAll('.order__select-item'),
    selectText = document.querySelector('.text'),
    arrowSvg = document.querySelector('.arrow');

select.onclick = () => {
    select.classList.toggle('active');
    wrapper.classList.toggle('active');
    arrowSvg.classList.toggle('active');
}

selectElements.forEach(element => {
    element.onclick = () => {
        selectText.innerText = '';
        selectText.innerText = `${element.textContent}`;
        wrapper.classList.toggle('active');
        select.classList.toggle('active');
        arrowSvg.classList.toggle('active');
    }
});