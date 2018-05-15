function smoothScroll(ev) {
	const section = document.getElementById(ev.currentTarget.hash.substr(1))
	if (section !== null) {
		ev.preventDefault()
		section.scrollIntoView({ behavior: 'smooth' })
	}
}

const siema = new Siema({ duration: 400, loop: true });
setInterval(() => {
	siema.next()
}, 4000);

document.querySelector('.prev').addEventListener('click', () => siema.prev());
document.querySelector('.next').addEventListener('click', () => siema.next());
