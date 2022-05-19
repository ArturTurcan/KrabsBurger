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




