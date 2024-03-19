function submit (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    document.getElementById("insert").innerHTML = name + " submitted the form";
}
document.getElementById("main-form").addEventListener("submit", submit);