// // DOM Manipulation 
// const titletop=document.getElementById('main-heading');
// titletop.style.color="red";


// const liitems = document.querySelectorAll('list-items');
// for(let i=0; i<liitems.length;i++){
//     liitems[i].style.color="yellow";
// }



// Creating Elements 
const ul = document.querySelector('ul');
const li = document.querySelector('li');

// Adding elements 
ul.append(li);

// Modifying the text 
// const firstliteitem = document.querySelector('.list-items');
// console.log(firstliteitem)
// console.log(firstliteitem.innerText);
// console.log(firstliteitem.textContent);
// console.log(firstliteitem.innerHTML);

li.innerText='Usman khan';

// Modifying attributes 
// li.setAttribute('id','main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));
// li.classList.remove('list-items');
li.classList.add('list-items');
li.remove();

console.log(li.classList.contains('list-items'));


// // GetElmentbyId()
// const title =document.getElementById('main-heading');
// console.log(title);

// // GetElementByClass()
// const listitem = document.getElementsByClassName('list-items');
// console.log(listitem);

// // GetElementByTagName()
// const list = document.getElementsByTagName('li');
// console.log(list);

// // querySelector()

// const query = document.querySelector('div');
// console.log(query);

// // querySelectorAll()

// const all = document.querySelectorAll('div');
// console.log(all);