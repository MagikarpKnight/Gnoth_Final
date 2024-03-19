function change (e) {
    e.preventDefault();
    const img = document.getElementById("img");
    img.src = "assets/img/thankyou.jpg";
    const text = document.getElementById("change-this");
    text.style.color = "orange";
}
document.getElementById("button").addEventListener("click", change);