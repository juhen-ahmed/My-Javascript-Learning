const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
const path = ['https://www.red.com', 'https://www.greenStock.com', 'https://www.blue.com', 'https://www.yellow.com', 'https://www.orange.com'];

const container = document.getElementById('Con1');

colors.forEach((color, index) => {
  const box = document.createElement('a');
  box.textContent = color.toUpperCase();
  box.classList.add('box', color);
  box.setAttribute('href',  path[index]); // Set the href to the corresponding URL
  box.setAttribute('target', '_blank');
  container.appendChild(box);
});


const colors2 = ['red', 'green', 'blue', 'yellow', 'orange'];

const btnContainer = document.getElementById('btnContainer');

colors2.forEach(color => {
  const button = document.createElement('button');
  button.textContent = color.toUpperCase();
  button.classList.add(color);
  button.addEventListener('click', () => {
    document.body.style.backgroundColor = color;
    console.log('clicked');
    
    
  });
  btnContainer.appendChild(button);
});




const images = [
  'img/img1.jpg',
  'img/img2.jpg',
  'img/img3.jpg',
  'img/img4.webp',
  'img/img3.jpg'
];

const thumbnailsContainer = document.getElementById('thumbnails-container');
const fullImage = document.getElementById('full-image');

images.forEach((img, index) => {
  const thumbnail = document.createElement('img');
  thumbnail.src = img;
  thumbnail.classList.add('thumbnail');
  if (index === 0) {
    thumbnail.classList.add('active'); // Add active class to the first thumbnail
    fullImage.src = img; // Set full image source to the first image
  }
  thumbnail.addEventListener('click', () => {
    document.querySelectorAll('.thumbnail').forEach(thumb => {
      thumb.classList.remove('active');
    });
    thumbnail.classList.add('active');
    fullImage.src = img;
  });
  thumbnailsContainer.appendChild(thumbnail);
});
