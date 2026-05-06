// SECTION NAVIGATION
const buttons = document.querySelectorAll("[data-target]");
const sections = document.querySelectorAll(".section");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        sections.forEach(sec => sec.classList.remove("active"));
        document.getElementById(btn.dataset.target).classList.add("active");
    });
});

// BACK BUTTON
document.querySelectorAll(".back").forEach(btn => {
    btn.addEventListener("click", () => {
        sections.forEach(sec => sec.classList.remove("active"));
        document.getElementById("home").classList.add("active");
    });
});

// TOGGLE DETAIL (scoped per section)
document.querySelectorAll(".toggle").forEach(btn => {
    btn.addEventListener("click", () => {
        const parent = btn.closest(".section");
        const id = btn.dataset.id;

        parent.querySelectorAll(".detail").forEach(d => d.style.display = "none");

        const target = parent.querySelector("#" + id);
        target.style.display = "block";
    });
});
