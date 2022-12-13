function translate_page () {
	let language = "en";

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	if (urlParams.get("l")) {
		language = urlParams.get("l")
	}

	let language_strings = null;
	// change if any other language
	fetch('./strings.json')
		.then(res => res.json())
		.then(data => {
			language_strings = data[language];
			console.log({language_strings})

			let target_els = document.getElementsByClassName('target');
			target_els = [...target_els];

			target_els.forEach(el => {
				key = el.getAttribute('target-key');
				if (key)
					el.innerText = language_strings[key];
			});
		})
		.catch(err => {
			console.log({ err });
		});
}

translate_page()