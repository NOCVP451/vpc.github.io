document.addEventListener('keydown', (e) => {
  const key = e.key;
  const drum = document.querySelector(`[data-d=${key}]`);
  const audio = document.querySelector(`[data-a=${key}]`);

  drum.classList.add('hit');

  setTimeout(() => {
    drum.classList.remove('hit');
  }, 100);

  audio.currentTime = 0;
  audio.play();
});


document.addEventListener('input', () => {
  const pads = document.getElementsByTagName("audio");
  const volumeSlider = document.getElementById('myKnob');

  console.log(pads)

  volumeSlider.addEventListener('input', () => {
    for (const pad of pads) {
      pad.volume = volumeSlider.value / 100;
    }
  });
});


var slider = document.getElementById("myKnob");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
};
