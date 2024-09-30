// Highlighting past experience and showing the image
const changebutton = document.querySelector(".change_bk");
const past_experience = document.querySelectorAll("#Education p, #Proj p");
const experienceImage = document.querySelector(".gallery-item"); // Select the gallery item

let back_g = true;

changebutton.onclick = function () {
    past_experience.forEach(link => {
        if (back_g) {
            link.classList.add("highlight_e");
            experienceImage.style.display = "block"; // Show the image when highlighting
        } else {
            link.classList.remove("highlight_e");
            experienceImage.style.display = "none"; // Hide the image when removing highlight
        }
    });
    back_g = !back_g;
};

// Pop-up functionality
const images = document.getElementsByClassName("gallery-img");
const pop_w = document.getElementsByClassName("myPop")[0];
const pop_Img = document.getElementById("img_pop");
const pop_h1 = document.getElementById("h1_pop");

// Loop through all gallery images to trigger the pop-up
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        pop_w.style.display = "block";
        pop_Img.src = this.src;
        pop_h1.innerHTML = this.alt;
    }
}

// Close the pop-up when the close button is clicked
const closeBtn = document.querySelector('.close');
closeBtn.onclick = function() {
    pop_w.style.display = "none";
};
