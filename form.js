
const form = document.getElementById('customized-form');
 function submitForm(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const desc = document.getElementById('desc').value;
    const category = document.getElementById('category').value;
    const cardContainer = document.getElementById('cardContainer');
    const card = document.createElement('div');
    card.classList.add('card');
    if (category === "in Progress") {
        card.classList.add('blue'); 
    } else if (category === "pending") {
        card.classList.add('red');  
    } else if (category === "completed") {
        card.classList.add('green'); 
    }
    card.innerHTML = `
        <h3>${title}</h3>
        <p>${desc}</p>
        <p> ${category}</p>
    `;
    cardContainer.appendChild(card);
   form.reset();
}
document.addEventListener('DOMContentLoaded', function () {
    form.addEventListener('submit', submitForm);
});
