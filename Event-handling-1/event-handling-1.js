// Getting 'myButton' Id by "document.getElementById()" method
const button = document.getElementById('myButton');

// Centering the button on the webpage
button.style.position = 'absolute';
button.style.top = '50%';
button.style.left = '50%';
button.style.transform = 'translate(-50%, -50%)';

// Setting the button's color
button.style.backgroundColor = '#4CAF50';
button.style.color = 'white';
button.style.padding = '12px 20px';
button.style.fontSize = '16px';
button.style.border = 'none';
button.style.cursor = 'pointer';

// Adding click event listener
button.addEventListener('click', () => {
  const message = 'Button clicked!';
  alert(message);
});