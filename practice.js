// function submitForm(event){
//     event.preventDefault();


//     const title=document.getElementById('title').value;
//     const desc=document.getElementById('desc').value;
//     const category=document.getElementById('category').value;

//     let valid =true;
//     if(!title){
//         document.getElementById('errorTitle').textContent='Title is required';
//     valid=false;
// } else {
//     document.getElementById('errorTitle').textContent='';
// }
// if(!desc){
//     document.getElementById('errorDesc').textContent='Description is required';
//      valid=false;
// }else{
//     document.getElementById('errorDesc').textContent= '';

//     if(!category){
//         document.getElementById('errorCategory').textContent="Category is required";
//          valid=false;
//     }else{ 
//         document.getElementById('errorCategory').textContent ="";

//         }
//     }
// if(valid){
//     const cardContainer=document.getElementById('cardContainer');
//     const card=document.createElement('div');
//     card.classList.add('card')
// }
// if(category==='completed'){
//     card.classList.add('complete')

// }else if
//     (category==='in progress'){
//         card.classList.add('in progress')
//     }else if (category==='pending'){
//         card.classList.add("pending")
//     }
//     card.innerHTML = `<h3>${title}</h3><p>${desc}</p>`;
//         cardContainer.appendChild(card);
//         document.getElementById('customized form').reset();
// }
// document.getElementById('customizedForm').addEventListener('submit', submitForm);
    


// function creatArguemnt(num1,num2){  parameter is like palaceholder it's give a reference
//     console.log(num1+num2)
// }

// creatArguemnt(10,12); arguement is actual value .
// function calculateRectangleArea(length,width){
//     return length*width;
// }
//  let Area=calculateRectangleArea(5,10);
//  console.log(Area)  

// const value=(val1,val3)=>{
//     return val1+val3;

// }
// let result= value(12,22)
// console.log(result)



// addnum(5,10);

// const addnum=function(a,b){
//     console.log(a+b)

// }
// // it's known as function exprssion that's never declared like hoisting method 

// addNum(10,12)// we can declare function at above this one is called function parameter
// function addNum(a,b){
//     console.log(a+b)
// }
// addNum(10,12) //



