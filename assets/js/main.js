/* =====================================================
   Resume section tabs and tab contents
===================================================== */
const resumePortfolioTabBtn = document.querySelectorAll(".resume-tabs .tab-btn");
const resumeTabContent = document.querySelectorAll(".resume-tab-content");

const resumeTabNav = function(index){
   resumeTabContent.forEach((content) => {
      content.style.display = "none";
      content.classList.remove("active");
   });

   resumePortfolioTabBtn.forEach((tabBtn) => {
      tabBtn.classList.remove("active");
   });

   if (resumeTabContent[index]) {
      resumeTabContent[index].style.display = "flex";
      setTimeout(() => {
         resumeTabContent[index].classList.add("active");
      }, 100);
   }

   if (resumePortfolioTabBtn[index]) {
      resumePortfolioTabBtn[index].classList.add("active");
   }
};

resumePortfolioTabBtn.forEach((tabBtn, i) => {
   tabBtn.addEventListener("click", () => {
      resumeTabNav(i);
   });
});

/* =====================================================
   Service modal open/close function
===================================================== */
const serviceCardWithModals = document.querySelectorAll(".service-container .card-with-modal");

serviceCardWithModals.forEach((serviceCardWithModal) => {
    const serviceCard = serviceCardWithModal.querySelector(".service-card");
    const serviceBackDrop = serviceCardWithModal.querySelector(".service-modal-backdrop");
    const serviceModal = serviceCardWithModal.querySelector(".service-modal");
    const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");

    // Modal ওপেন করার জন্য
    serviceCard.addEventListener("click", () => {
        serviceBackDrop.style.display = "flex";
        setTimeout(() => {
            serviceBackDrop.classList.add("active");
            serviceModal.classList.add("active");
        }, 100);
    });

    // Modal বন্ধ করার জন্য
    modalCloseBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Parent click ট্রিগার হওয়া বন্ধ করবে
        serviceBackDrop.classList.remove("active");
        serviceModal.classList.remove("active");
        setTimeout(() => {
            serviceBackDrop.style.display = "none";
        }, 500);
    });
});

/* =====================================================
   Portfolio modals, tabs and cards
===================================================== */
// Filter portfolio cards according to portfolio tabs.
document.addEventListener("DOMContentLoaded", () => {
    const portfolioTabBtns = document.querySelectorAll(".portfolio-tabs .tab-btn");
    const cardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

    portfolioTabBtns.forEach((tabBtn) => {
        tabBtn.addEventListener("click", () => {
            const filter = tabBtn.getAttribute("data-filter");

            cardsWithModals.forEach((cardWithModal) => {
                if(filter === "all" || cardWithModal.classList.contains(filter)){
                    cardWithModal.classList.remove("hidden");
                    cardWithModal.style.opacity = "1";
                }
                else{
                    cardWithModal.classList.add("hidden");
                    cardWithModal.style.opacity = "0";
                }
            });

            portfolioTabBtns.forEach((btn) => btn.classList.remove("active"));
            tabBtn.classList.add("active");
        });
    });
});

// Open/Close Portfolio modals.
const portfolioCardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

portfolioCardsWithModals.forEach((portfolioCardWithModal) => {
    const portfolioCard = portfolioCardWithModal.querySelector(".portfolio-card");
    const portfolioBackdrop = portfolioCardWithModal.querySelector(".portfolio-modal-backdrop");
    const portfolioModal = portfolioCardWithModal.querySelector(".portfolio-modal");
    const modalCloseBtn = portfolioCardWithModal.querySelector(".modal-close-btn");

    portfolioCard.addEventListener("click", () => {
        portfolioBackdrop.style.display = "flex";
        setTimeout(() => {
            portfolioBackdrop.classList.add("active");
            portfolioModal.classList.add("active");
        }, 100);
    });

    modalCloseBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        portfolioBackdrop.classList.remove("active");
        portfolioModal.classList.remove("active");
        setTimeout(() => {
            portfolioBackdrop.style.display = "none";
        }, 500);
    });
});

/* =====================================================
   Testimonial Swiper
===================================================== */
var swiper = new Swiper(".sue-client-swiper", {
      slidesPerView: 1,
      centeredSlides: false,
      slidesPerGroupSkip: 1,
      grabCursor: true,
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        769: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});
