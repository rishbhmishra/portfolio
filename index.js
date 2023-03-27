const text = "Associate Software Developer";
let i = 0;

function typeWriter() {
if (i < text.length) {
    document.getElementById("desig").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
}
}

typeWriter();
