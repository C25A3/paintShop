const burgerBtn = document.querySelector('.nav__burger-btn')
const closeNavBtn = document.querySelector('.close-nav')
const openedNav = document.querySelector('.opened-nav')
const navLinks = document.querySelector('nav__item')

const accordionBtns = document.querySelectorAll('.opened-nav__accordion-btn')

const showNav = () => {
	openedNav.classList.add('opened-nav--active')
}

const closeNav = () => {
	openedNav.classList.remove('opened-nav--active')
}

function openAccordion() {
	const accordionContent = this.nextElementSibling
    const accordionBtn = this
    const arrow = document.querySelector('.fa-angle-down')

    console.log(this.firstChild.nextElementSibling);

	if (accordionContent.getAttribute('aria-expanded') === 'false') {
		accordionContent.setAttribute('aria-expanded', true)

		accordionContent.style.height = 213 + 'px'
		this.firstChild.nextElementSibling.classList.add('fa-angle-down--opened')
	} else {
		accordionContent.setAttribute('aria-expanded', false)
		accordionContent.style.height = 0
        this.firstChild.nextElementSibling.classList.remove('fa-angle-down--opened')
	}
}
burgerBtn.addEventListener('click', showNav)
closeNavBtn.addEventListener('click', closeNav)
accordionBtns.forEach(btn => btn.addEventListener('click', openAccordion))
