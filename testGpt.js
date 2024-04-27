// .forEach()

// .Practice 1


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

// .Practice 2

const colors2 = ["see-Red", 'see-Green', 'see-Blue', 'see-Yellow', 'see-Orange', 'Reset-To-Default'];
const btnContainer = document.getElementById('btnContainer');


colors2.forEach((color, index) => {
  const button = document.createElement('button');
  const colors3 = ['red', 'green', 'blue', 'yellow', 'orange', 'default'];

  button.textContent = color.toUpperCase();
  button.classList.add(color);

  button.addEventListener('click', () => {
    if (index === colors2.length - 1) {
      document.body.style.backgroundColor = 'inherit';
    } else {
      document.body.style.backgroundColor = colors3[index];
    }
  });

  btnContainer.appendChild(button);
});

// .Practice 3

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



// .map()


// .testGpt[not prac]

// Array of temperatures in Celsius
const celsiusTemperatures = [0, 15, 30, 45, 60];

// Function to convert Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

// Using map() to convert Celsius temperatures to Fahrenheit
const fahrenheitTemperatures = celsiusTemperatures.map(celsiusToFahrenheit);

console.log("Celsius Temperatures:", celsiusTemperatures);
console.log("Fahrenheit Temperatures:", fahrenheitTemperatures);

// Practice 1


// Array of hexadecimal color codes
const colors4 = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];

// Using map() to generate HTML for color squares
const colorSquaresHTML = colors4.map(clo => `<div class="color-square" style="background-color: ${clo};"></div>`);


// Inserting color squares HTML into the DOM
const colorContainer = document.getElementById('color-container');
colorContainer.innerHTML = colorSquaresHTML;


// Practice 2



// Array of quiz questions and options
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["W", "H2", "O", "H2O"],
    answer: "H2O"
  }
];

// Function to generate HTML for each quiz question
const generateQuestionHTML = (questionObj, index) => {
  const optionsHTML = questionObj.options.map(option => `
    <label class="option">
      <input type="radio" name="question${index}" value="${option}">
      ${option}
    </label>
  `).join('');

  return `
    <div class="question">
      <p>${index + 1}. ${questionObj.question}</p>
      ${optionsHTML}
    </div>
  `;
};

// Using map() to generate HTML for each quiz question
const quizHTML = quizData.map(generateQuestionHTML).join('');

// Inserting quiz HTML into the DOM
const quizContainer = document.getElementById('quiz-container');
quizContainer.innerHTML = quizHTML;

// Function to handle quiz submission
const handleSubmit = () => {
  const userAnswers = [];
  quizData.forEach((question, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
    if (selectedOption) {
      userAnswers.push(selectedOption.value);
    } else {
      userAnswers.push(null);
    }
  });
  console.log("User Answers:", userAnswers);
};

// Adding event listener to submit button
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', handleSubmit);


// .filter()
// Practice 1

// Original array
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtering only even numbers using .filter() method
const evenNumbers = numbers3.filter(function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]


// Practice 2


function filterItems() {
  const inputElement = document.getElementById('inputItems');
  const items = inputElement.value.split(',').map(item => item.trim());
  
  // Filter items based on condition (e.g., items containing 'apple') using .filter()
  const filteredItems = items.filter(function(item) {
    return item.toLowerCase().includes('apple');
  });
  
  // Display filtered items on the page
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = '';
  if (filteredItems.length === 0) {
    resultElement.innerHTML = '<p>No items found matching the filter.</p>';
  } else {
    const itemList = document.createElement('ul');
    filteredItems.forEach(function(item) {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      itemList.appendChild(listItem);
    });
    resultElement.appendChild(itemList);
  }
}


// Practice 3

const tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    tasks.push({ text: taskText, completed: false });
    renderTasks();
    taskInput.value = '';
  }
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function filterTasks() {
  const filterValue = document.getElementById('filter').value;
  renderTasks(filterValue);
}

function renderTasks(filter = 'all') {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'incomplete') {
      return !task.completed;
    } else {
      return true;
    }
  });

  filteredTasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = task.text;
    if (task.completed) {
      listItem.classList.add('completed');
    }
    listItem.addEventListener('click', () => toggleTaskCompletion(index));
    taskList.appendChild(listItem);
  });
}
