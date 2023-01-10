(function () {
	("use strict");

	/* Easy selector helper function */
	const select = (el, all = false) => {
		el = el.trim();
		if (all) {
			return [...document.querySelectorAll(el)];
		} else {
			return document.querySelector(el);
		}
	};

	/* Preloader */
	let preloader = select("#preloader");
	if (preloader) {
		window.addEventListener("load", () => {
			preloader.remove();
		});
	}

	/* Hero type effect */
	const typed = select(".typed");
	if (typed) {
		let typed_strings = typed.getAttribute("data-typed-items");
		typed_strings = typed_strings.split(",");
		new Typed(".typed", {
			strings: typed_strings,
			loop: true,
			typeSpeed: 100,
			backSpeed: 50,
			backDelay: 2000,
		});
	}

	/* Skills animation */
	let skilsContent = select(".skills-content");
	if (skilsContent) {
		new Waypoint({
			element: skilsContent,
			offset: "80%",
			handler: function (direction) {
				let progress = select(".progress .progress-bar", true);
				progress.forEach((el) => {
					el.style.width = el.getAttribute("aria-valuenow") + "%";
				});
			},
		});
	}

	select(".my-nav-link", true).forEach((link) => {
		link.onclick = () => {
			document.getElementById("offcanvas-close").click();
		};
	});

	// select("#my-age").textContent = new Date().getFullYear() - 2002;
})();
