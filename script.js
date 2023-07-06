document.addEventListener('keydown', (e) => {
  const key = {
    name: e.key,
    code: e.keyCode
  };
  
  konami.push(key.name);

  if (konami.length > 10) {
    konami.shift();
  }

  if (konami.join('') === 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba') {
    activateEasterEgg();
  }
});

function activateEasterEgg() {
  // Activation code for the Easter Egg goes here. This could be a function that shows a hidden element, changes the CSS theme, etc.
  alert("Konami Code Entered, Easter Egg Activated!");
}



window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

