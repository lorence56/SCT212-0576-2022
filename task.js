// Query for the submit button and input task field
const submit = document.querySelector('#submit-button');
const newTask = document.querySelector('#task-input');

// Disable the submit button by default
submit.disabled = true;

// Listen for input in the input field
newTask.addEventListener('input', () => {
    // Enable the submit button if there's input
    submit.disabled = newTask.value.trim() === '';
});

// Listen for form submission
const form = document.querySelector('#task-form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Find the task submitted
    const taskText = newTask.value.trim();

    // Create a list item for the new task
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Add the new element to the unordered list
    const taskList = document.querySelector('#task-list');
    taskList.appendChild(listItem);

    // Clear the input field
    newTask.value = '';

    // Prevent default form submission
    return false;
});
