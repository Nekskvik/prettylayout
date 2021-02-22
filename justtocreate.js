// LOAD ANIMATION
const timeline = gsap.timeline({defaults: {duration: 1.2}})

timeline
	.from('.float-left', {opacity: 0, duration: 0.4})
	.from('.main-content', {y: '-100%', ease: 'bounce'}, "<")
	.from('.nav', {opacity: 0})
	.from('.pre-desc', {opacity: 0, ease: "power2.out", x: '-100%'}, "<.2")
	.from('.main_title', {duration: 2.1 ,opacity: 0, ease: "elastic.out(1, 0.3)", scale: 0}, "<")
	.from('.main-text', {opacity: 0, ease: "power3.out", x: '100%'}, "<")
	.from('.button', {duration: 0.7, opacity: 0}, "<")
	.from('.main-pic', {rotate: 360, opacity: 0}, "<.1")
	.from('.arrows', {opacity: 0}, "<")

// IMG SLIDER

const next = document.querySelector('#next'),
      prev = document.querySelector('#prev'),
      slides = document.querySelectorAll('.slide')

const nextSlide = () => {
	const currentlyOn = document.querySelector('.current')
	currentlyOn.classList.remove('current')
	if(currentlyOn.nextElementSibling){
		currentlyOn.nextElementSibling.classList.add('current')
	}else{
		slides[0].classList.add('current')
	}
	setTimeout(() => currentlyOn.classList.remove('current'))
}
next.addEventListener('click', e => {
	nextSlide()
})

const prevSlide = () => {
	const currentlyOn = document.querySelector('.current')
	currentlyOn.classList.remove('current')
	if(currentlyOn.previousElementSibling){
		currentlyOn.previousElementSibling.classList.add('current')
	}else{
		slides[slides.length - 1].classList.add('current')
	}
	setTimeout(() => currentlyOn.classList.remove('current'))
}
prev.addEventListener('click', e => {
	prevSlide()
})