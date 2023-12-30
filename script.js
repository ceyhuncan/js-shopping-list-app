/* WHAT JS CAN DO */
/* Change / add / remove all the HTML elements and attributes in the page
Change / add / remove all css styles in the page
React to all existing HTML events in the page
Create a new HTML events in the page

Each browser has its own engine to read the js file and execure line by line .
Chrome has v8, safari has nitro, firefox has spidermonkey engines
window is top parent js object and document object is under of it. any function under window object can be called in any level. 
*/

let button = document.getElementById('enter');
let input = document.getElementById('userInput');
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');
console.log(input.value);


function createListElement() {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
}

function createElementWhenEnterClicked() {
    if (input.value != '') {
        createListElement();
    }
}

function createElementWhenEnterPressed(event) {
    if (input.value != '' && event.code == 'Enter') {
        createListElement();
    }
}

button.addEventListener('click', createElementWhenEnterClicked);
input.addEventListener('keydown', createElementWhenEnterPressed);

document.addEventListener('click', targetFunction);
function targetFunction(event) {
event.target.classList.toggle('done');

}

function createDel(){
let deleteButton = document.createElement('button');

li.appendChild(document.createTextNode("X"));
}
createDel();







