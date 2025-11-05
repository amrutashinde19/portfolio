// Typing animation
const textArray = ["Python Developer", "Java Programmer", "Frontend Developer"];
let typingElement = document.getElementById("typing");
let textIndex = 0, charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typingElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 200);
  }
}

document.addEventListener("DOMContentLoaded", type);
