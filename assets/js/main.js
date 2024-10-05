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

   /* Scroll to background button */
   document.querySelector(".btn-reb").addEventListener("click", (e) => {
      e.preventDefault();
      let menuButtonContainer = select("#menu-button-container");
      let offset = menuButtonContainer.offsetHeight;

      let elementPos = document.querySelector("#background").offsetTop;

      window.scrollTo({
         top: elementPos - offset,
         behavior: "smooth",
      });
   });

   select("#tooltip-hover", false).addEventListener("mouseenter", (e) => {
      select("#tooltip-hover-content").classList.remove("d-none");
   });

   select("#tooltip-hover", false).addEventListener("mouseleave", (e) => {
      select("#tooltip-hover-content").classList.add("d-none");
   });

   select("#tooltip-hover-2", false).addEventListener("mouseenter", (e) => {
      select("#tooltip-hover-content-2").classList.remove("d-none");
   });

   select("#tooltip-hover-2", false).addEventListener("mouseleave", (e) => {
      select("#tooltip-hover-content-2").classList.add("d-none");
   });
})();
