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
		link.onclick = (e) => {
			e.preventDefault();
			document.getElementById("offcanvas-close").click();
			if (e.target.hash === "#home") {
				window.scrollTo(0, 0);
				return;
			}

			let menuButtonContainer = select("#menu-button-container");
			let offset = menuButtonContainer.offsetHeight;

			let elementPos = document.querySelector(e.target.hash).offsetTop;

			window.scrollTo({
				top: elementPos - offset,
				behavior: "smooth",
			});
		};
	});

	/* Scroll to about butoon */
	document.querySelector(".btn-reb").addEventListener("click", (e) => {
		e.preventDefault();
		let menuButtonContainer = select("#menu-button-container");
		let offset = menuButtonContainer.offsetHeight;

		let elementPos = document.querySelector("#about").offsetTop;

		window.scrollTo({
			top: elementPos - offset,
			behavior: "smooth",
		});
	});
})();
