// ===========================
// MT SOLAR WEBSITE
// script.js
// ===========================


// ===========================
// HEADER SCROLL EFFECT
// ===========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.background =
            "rgba(255,255,255,0.98)";

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.08)";

    } else {

        header.style.background =
            "rgba(255,255,255,0.95)";

        header.style.boxShadow =
            "0 2px 20px rgba(0,0,0,0.05)";
    }

});


// ===========================
// DROPDOWN (MOBILE SUPPORT)
// ===========================

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {

    const trigger =
        dropdown.querySelector("a, button");

    if (!trigger) return;

    trigger.addEventListener("click", function (e) {

        if (window.innerWidth <= 1200) {

            e.preventDefault();

            dropdown.classList.toggle("active");

        }

    });

});


// ===========================
// CLOSE DROPDOWN
// ===========================

document.addEventListener("click", (e) => {

    dropdowns.forEach(dropdown => {

        if (!dropdown.contains(e.target)) {

            dropdown.classList.remove("active");

        }

    });

});


// ===========================
// QUOTE FORM
// ===========================

const quoteForm =
    document.querySelector("form");

if (quoteForm) {

    quoteForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const name =
                this.querySelector(
                    'input[type="text"]'
                ).value;

            alert(

                `ขอบคุณ ${name} สำหรับการขอใบเสนอราคา\n\nทีมงาน MT Solar จะติดต่อกลับภายใน 24 ชั่วโมง`

            );

            this.reset();

        }
    );

}


// ===========================
// SMOOTH SCROLL
// ===========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (e) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }
    );

});


// ===========================
// SIMPLE FADE-IN ANIMATION
// ===========================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


document
.querySelectorAll(
    ".service-card, .project-card, .stat-item"
)
.forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});


// ===========================
// OPTIONAL CSS ANIMATION
// ===========================
//
// เพิ่มโค้ดนี้ท้าย style.css
//
// .hidden{
//     opacity:0;
//     transform:translateY(40px);
//     transition:all .8s ease;
// }
//
// .show{
//     opacity:1;
//     transform:translateY(0);
// }
//
