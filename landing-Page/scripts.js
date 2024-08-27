document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let index = 0;
    const intervalTime = 3000; // Change slide every 3 seconds
    let slideInterval;

    function showSlide(n) {
        if (n >= slides.length) index = 0;
        if (n < 0) index = slides.length - 1;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        index++;
        showSlide(index);
    }

    function prevSlide() {
        index--;
        showSlide(index);
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    nextButton.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide(); // Stop auto sliding when manually changing slides
        startAutoSlide(); // Restart auto sliding
    });

    prevButton.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide(); // Stop auto sliding when manually changing slides
        startAutoSlide(); // Restart auto sliding
    });

    showSlide(index); // Initialize slider
    startAutoSlide(); // Start auto sliding
});
function submitForm() {
    var parms = {
      user_name: document.getElementById("name").value,
      user_email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };
    const serviceID = "service_19q2j8t";
    const templateID = "template_cjof0rp";
  
    emailjs
      .send(serviceID, templateID, parms)
      .then((res) => {
        document.getElementById("user_name").value = "";
        document.getElementById("user_email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message has been sent!");
      })
      .catch((err) => console.log(err));
  }

  