// Function to handle form submission
function submitForm(event) {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();

    // Get the form data
    const title = document.getElementById('title').value;
    const desc = document.getElementById('desc').value;
    const category = document.getElementById('category').value;

    // Start by assuming the form is valid
    let valid = true;

    // Validate the title field
    if (!title) {
        document.getElementById('errorTitle').textContent = 'Title is required';
        valid = false;
    } else {
        document.getElementById('errorTitle').textContent = '';
    }

    // Validate the description field
    if (!desc) {
        document.getElementById('errorDesc').textContent = 'Description is required';
        valid = false;
    } else {
        document.getElementById('errorDesc').textContent = '';
    }

    // Validate the category field
    if (!category) {
        document.getElementById('errorCategory').textContent = 'Category is required';
        valid = false;
    } else {
        document.getElementById('errorCategory').textContent = '';
    }

    // If the form is valid, create a new card and display it
    if (valid) {
        const cardContainer = document.getElementById('cardContainer');
        const card = document.createElement('div');
        card.classList.add('card');

        // Add category-based class for color
        if (category === 'completed') {
            card.classList.add('complete'); // Green for completed
        } else if (category === 'in-progress') {
            card.classList.add('in-progress'); // Blue for in-progress
        } else if (category === 'pending') {
            card.classList.add('pending'); // Yellow for pending
        }

        // Add the title and description to the card
        card.innerHTML = `<h3>${title}</h3><p>${desc}</p>`;
        cardContainer.appendChild(card);

        // Clear the form fields after submission
        document.getElementById('customizedForm').reset();
    }
}

// Add an event listener to the form to handle submission
document.getElementById('customizedForm').addEventListener('submit', submitForm);
