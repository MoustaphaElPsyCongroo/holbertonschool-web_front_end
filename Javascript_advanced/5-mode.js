/*
  Create a function named changeMode:

  It accepts 5 arguments size (number), weight (string), transform (string), background (string), color (string)
  Using closure, it changes the style of the entire page and set the font-size, font-weight, text-transform, background-color, and color
  Write a function named main:

  Set a variable named spooky that passes the arguments 9, bold, uppercase, pink, green to changeMode
  Set a variable named darkMode that passes the arguments 12, bold, capitalize, black, white to changeMode
  Set a variable named screamMode that passes the arguments 12, normal, lowercase, white, black to changeMode
  Add a paragraph to the body of the page with the text Welcome Holberton!
  Add a button to the body with the text Spooky
  Add a button to the body with the text Dark mode
  Add a button to the body with the text Scream mode
  When clicking on each button, the page CSS should change to the different themes you created previously
  Call the main function
*/
function changeMode (size, weight, transform, background, color) {
  const page = document.querySelector('html');
  return () => {
    page.style.fontSize = size;
    page.style.fontWeight = weight;
    page.style.textTransform = transform;
    page.style.background = background;
    page.style.color = color;
  };
}

function main () {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const body = document.querySelector('body');
  const p = document.createElement('p');
  p.textContent = 'Welcome Holberton!';
  const spookyButton = document.createElement('button');
  spookyButton.textContent = 'Spooky';
  spookyButton.onclick = spooky;
  const darkModeButton = document.createElement('button');
  darkModeButton.textContent = 'Dark mode';
  darkModeButton.onclick = darkMode;
  const screamModeButton = document.createElement('button');
  screamModeButton.textContent = 'Scream mode';
  screamModeButton.onclick = screamMode;

  body.appendChild(p);
  body.appendChild(spookyButton);
  body.appendChild(darkModeButton);
  body.appendChild(screamModeButton);
}

main();
