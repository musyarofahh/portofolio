function showSection(id) {
    document.querySelectorAll("section").forEach(sec => {
        sec.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}

// DETAIL TOGGLE
function showDetail(id) {
    document.querySelectorAll(".detail").forEach(d => {
        d.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}
