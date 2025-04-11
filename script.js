document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || message === "") {
            formMessage.innerText = "Please fill in all fields.";
            formMessage.style.color = "red";
        } else {
            formMessage.innerText = "Thank you for reaching out, " + name + "!";
            formMessage.style.color = "#37474f";
            document.getElementById("contactForm").reset();
        }
    });

    function adjustOverlayTextSize() {
        let overlays = document.querySelectorAll(".overlay");
        overlays.forEach(overlay => {
            let parentWidth = overlay.parentElement.offsetWidth;
            overlay.style.fontSize = parentWidth > 400 ? "18px" : "14px";
        });
    }

    window.addEventListener("resize", adjustOverlayTextSize);
    adjustOverlayTextSize();
});
