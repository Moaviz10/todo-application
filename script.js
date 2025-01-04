// Store form data as an array
let formData = [];

// Get references to the form and its elements
const form = document.getElementById('taskForm');
const labelInput = document.getElementById('label');
const descInput = document.getElementById('desc');
const categoryInput = document.getElementById('category');
const labelError = document.getElementById('labelError');
const descError = document.getElementById('descError');
const categoryError = document.getElementById('categoryError');
const cardsContainer = document.getElementById('cardsContainer');

// Function to validate form data
function validateForm() {
    let valid = true;

    // Clear previous error messages
    labelError.textContent = '';
    descError.textContent = '';
    categoryError.textContent = '';

    // Validate Title
    if (labelInput.value.trim() === '') {
        labelError.textContent = 'Title is required';
        valid = false;
    }

    // Validate Description
    if (descInput.value.trim() === '') {
        descError.textContent = 'Description is required';
        valid = false;
    }

    // Validate Category
    if (categoryInput.value === '') {
        categoryError.textContent = 'Category is required';
        valid = false;
    }

    return valid;
}

// Function to display cards
function displayCards() {
    // Clear the previous cards
    cardsContainer.innerHTML = '';

    // Generate a card for each item in the formData array
    formData.forEach((data) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.description}</p>
            <p><strong>Category:</strong> ${data.category}</p>
        `;
        cardsContainer.appendChild(card);
    });
}

// Form submission handler
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Validate the form
    if (validateForm()) {
        // Create a new data object
        const newData = {
            title: labelInput.value.trim(),
            description: descInput.value.trim(),
            category: categoryInput.value,
        };

        // Push the new data to the array
        formData.push(newData);

        // Display the updated cards
        displayCards();

        // Reset the form
        form.reset();
    }
});
