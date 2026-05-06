function showSection(id) {
    document.querySelectorAll("section").forEach(sec => {
        sec.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

// toggle detail (bisa buka/tutup)
function toggleDetail(id) {
    const el = document.getElementById(id);

    if (el.style.display === "block") {
        el.style.display = "none";
    } else {
        document.querySelectorAll(".detail").forEach(d => {
            d.style.display = "none";
        });
        el.style.display = "block";
    }
}
