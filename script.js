
// Select the heading by ID and change its text content
document.getElementById("main-heading").textContent = "Updated Heading";

// Select paragraphs with class 'text-content' and change their color
const paragraphs = document.getElementsByClassName("text-content");
for (let paragraph of paragraphs) {
    paragraph.style.color = "red";
}

// Change the source of the image with ID 'main-image'
document.getElementById("main-image").src = "https://via.placeholder.com/200";

// Change the background color of the div with class 'container'
document.querySelector(".container").style.backgroundColor = "lightgrey";

// Change the font size of all paragraphs inside the container div
const allParagraphs = document.querySelectorAll(".container p");
allParagraphs.forEach(paragraph => {
    paragraph.style.fontSize = "18px";
});
