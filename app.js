const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		backToTop.style.display = 'block';
	} else {
		backToTop.style.display = 'none';
	}
});

window.addEventListener("load", function () {
    let loader = document.getElementById("loader");
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.3s ease-out";
    setTimeout(() => {
        loader.style.display = "none";
    }, 400); 
});

AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
});

backToTop.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});

(function() {
    emailjs.init("fIjFx9N7NI21MUz6x"); // Your Email.js User ID

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form field values
        let name = document.querySelector("input[name='name']").value.trim();
        let email = document.querySelector("input[name='email']").value.trim();
        let message = document.querySelector("textarea[name='message']").value.trim();

        // Validate form fields
        if (name === "" || email === "" || message === "") {
            alert("❌ Please fill in all fields before submitting.");
            return;
        }

        if (!validateEmail(email)) {
            alert("❌ Please enter a valid email address.");
            return;
        }

        // Change button state to "Sending..."
        let submitButton = document.querySelector("button[type='submit']");
        submitButton.innerHTML = "Sending...";
        submitButton.disabled = true;

        // Send form data via Email.js
        emailjs.sendForm("service_nhyovap", "template_simv9fr", this)
            .then(function(response) {
                alert("✅ Message sent successfully!");
                submitButton.innerHTML = "Send"; // Reset button text
                submitButton.disabled = false; // Enable button again
                document.getElementById("contact-form").reset(); // Reset form
            }, function(error) {
                alert("❌ Error sending message. Please try again.");
                submitButton.innerHTML = "Send"; // Reset button text
                submitButton.disabled = false; // Enable button
            });
    });

    // Email validation function
    function validateEmail(email) {
        let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
})();
