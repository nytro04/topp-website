for (const a of document.querySelectorAll('a[href*="#"]')) {
	a.addEventListener('click', ev => {
		document
			.getElementById(a.hash.substr(1))
			.scrollIntoView({ behavior: 'smooth' })
		ev.preventDefault()
	})
}