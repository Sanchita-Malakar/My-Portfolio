document.addEventListener("DOMContentLoaded", () => {
  new Typed(".typing", {
    strings: [
      "Web Developer",
      "Aspiring CSE Student",
      "Future Software Engineer"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1000,
    loop: true,
    showCursor: false   // <--- IMPORTANT
  });
});

function type() {
  if (charIndex < text[index].length) {
    currentText += text[index].charAt(charIndex);
    typingElement.textContent = currentText;
    charIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    currentText = currentText.slice(0, -1);
    typingElement.textContent = currentText;
    charIndex--;
    setTimeout(erase, 100);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();

});
