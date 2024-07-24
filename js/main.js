const tabItem = document.querySelectorAll ('.tabs__btn-item')
const tabContent = document.querySelectorAll('.tabs__content-item')

tabItem.forEach(function (element) {
  element.addEventListener('click', open)
})

function open (evt) {
  const tabTarget = evt.currentTarget
  const button = tabTarget.dataset.button

  tabItem.forEach(function(item){
    item.classList.remove('tabs__btn-item--active')
  })

  tabTarget.classList.add('tabs__btn-item--active')

  tabContent.forEach(function(item) {
    item.classList.remove('tabs__content-item--active')
  })

  document.querySelector(`#${button}`).classList.add('tabs__content-item--active')
  console.log(tabTarget)
  console.log(button)
}

const menuBtn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu__list')

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active')
})

// const inputEmail = document.querySelector('input[type="email"]')
// const inputName = document.querySelector('input[type="text"]')
// const inputText = document.querySelector('.form__textarea')
// const formBtn = document.querySelector('.form__btn')
// const notes = []

// formBtn.addEventListener('click', () => {
//   const newNote = {
//     name: inputName.value,
//     email: inputEmail.value,
//     text: inputText.value
//   }
//   notes.push(newNote)
//   // console.log(inputEmail.value)
//   // console.log(inputName.value)
//   inputEmail.value = ''
//   inputName.value = ''
//   inputText.value = ''

//   console.log(notes)
// })


const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});