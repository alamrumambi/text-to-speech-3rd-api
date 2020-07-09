function playSound() {
    var text = document.getElementById("text-input").value;
    responsiveVoice.speak(text);
}