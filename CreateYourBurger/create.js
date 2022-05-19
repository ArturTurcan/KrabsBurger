'use strict'
const bread = document.querySelector('.chifla')
const meat = document.querySelector('.carne')
const sosTop= document.querySelector('.top-top')
const bottom = document.querySelector('.sos-bottom')
const cheese = document.querySelector('.cascaval')
const cosh = document.querySelector('.cosh')
let boxCosh = []

cosh.addEventListener('click',()=>{
    boxCosh.push(bread.value , meat.value , sosTop.value , bottom.value , cheese.value)
    alert(boxCosh)
})

////BOX CHOICE////

const boxFood = document.querySelector(".cardFood");
const imgFood = document.querySelector(".imgBox");
const shopNow = document.querySelector(".shopNow")
const close = document.querySelector(".close")
const number = document.getElementById('contact')

imgFood.addEventListener("click", () =>{
    boxFood.style.display = "flex";
})

close.addEventListener("click", () =>{
     boxFood.style.display = "none"
})
shopNow.addEventListener("click", () => number.click())
