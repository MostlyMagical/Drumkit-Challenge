window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`key[data-key="${e.keyCode}"]`);
    audio.currentTime=0; //Rewinds to the beginning and allows the sounds to play in rapid succession
    audio.play();
    key.classList.add("playing"); //adds a class to the key divs for the animation
});