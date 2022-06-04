myNavLinks = document.querySelectorAll(".my-nav-link");
offcanvasClose = document.getElementById("offcanvas-close");

myNavLinks.forEach((el) => {
	el.onclick = function () {
		offcanvasClose.click();
	};
});
