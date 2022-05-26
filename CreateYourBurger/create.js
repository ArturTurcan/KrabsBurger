'use strict'
const bread = document.querySelector('.chifla')
const meat = document.querySelector('.carne')
const sosTop = document.querySelector('.top-top')
const bottom = document.querySelector('.sos-bottom')
const cheese = document.querySelector('.cascaval')
const cosh = document.querySelector('.cosh')
let boxCosh = []
const textFood = document.querySelector(".textFood")
const clearBox = () => {
    const childs = document.querySelectorAll(".textFood>p");
    childs.forEach(item => textFood.removeChild(item))
}
cosh.addEventListener('click', () => {
    clearBox()

    const products = [bread.value, meat.value, sosTop.value, bottom.value, cheese.value]
    products.forEach(item => {
        const element = document.createElement('p')
        element.innerText = item
        textFood.appendChild(element)
    })
})

////BOX CHOICE////

const boxFood = document.querySelector(".cardFood");
const imgFood = document.querySelector(".imgBox");
const shopNow = document.querySelector(".shopNow")
const close = document.querySelector(".close")
const number = document.getElementById('contact')

imgFood.addEventListener("click", () => {
    boxFood.style.display = "flex";
})

close.addEventListener("click", () => {
    boxFood.style.display = "none"
})
shopNow.addEventListener("click", () => number.click())

close.addEventListener("click", clearBox)



