
const boxes = document.querySelectorAll('.box');
const mainImage = document.getElementById('main-image');

// Pop up form
const contactUsBtn = document.querySelector(".btn-contact-us");
const popupForm = document.getElementById("popupForm");
const closeBtn = document.querySelector(".close-btn");

contactUsBtn.addEventListener("click", function() {
    popupForm.style.display = "block";
});


window.addEventListener("click", function(event) {
    if (!popupForm.contains(event.target) && event.target !== contactUsBtn) {
        popupForm.style.display = "none";
    }
});

// Change image on click
boxes.forEach(box => {
    box.addEventListener('click', () => {
    
        const redBox = document.querySelector('.box.red');
        const whiteBox = box;

        if (whiteBox !== redBox) {
            redBox.classList.remove('red');
            redBox.classList.add('white');

            whiteBox.classList.remove('white');
            whiteBox.classList.add('red');

            mainImage.src = whiteBox.getAttribute('data-image');
            mainImage.style.borderRadius = '5px';
            
        }
    });
});

