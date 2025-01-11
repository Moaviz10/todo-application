const form=document.getElementById('customized-form');
const formContainer=document.getElementById("container-form")
form.addEventListener("submit",function(event){
  event.preventDefault();
  const title=document.getElementById('label');
  const desc=document.getElementById("desc");
  const category=document.getElementById('category');
  if(title&&desc&&category){
    const newCard=document.creatElement('div')
    newCard.classList.add('card');
    if(category==='pending'){
        newCard.style.baackgroundColor="yellow"
    }else
    if(category==='in progress'){
        newCard.style.baackgroundColor="blue"
    }else
    if(category==='completed'){
        newCard.style.baackgroundColor="green"
    }
     newCard.innerHTML = `
       <h3>${title}<h3>
       <p>${desc}<p>
       <span>${category.value}<span>`;

       cardContainer.appendChild(newCard)
       form.reset();
      }else{
        let message="please fill all fileds"
        alert('the message is: '+message)
      }

})