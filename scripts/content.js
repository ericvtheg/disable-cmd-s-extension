document.addEventListener('keydown', e => {
	if (e.key === 's' && ((/Mac/.exec(navigator.platform)) ? e.metaKey : e.ctrlKey)) {
		e.preventDefault();
	}
}, false);