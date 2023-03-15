"use strict";

let data = [{
    id: 1, task: 'Bring Milk.', isCompleted: false
},{
    id: 2, task: 'Go to School.', isCompleted: false
},{
    id: 3, task: 'Book tickets for movie. ', isCompleted: false
}];



function appendToUl(props) {
    const element = document.querySelector('#list');
    if(!element) return '';
    element.innerHTML =  props;
}

function createLIElement(props){
    return `<li id=${props?.id} onClick='updateTaskStatus(${props?.id}, "${props?.task}")' class='isCompleted-${props.isCompleted}' >  ${props?.task} </li>`
}


function getListOfTodo() {
    let listElements = '';
    if(!data) return [];
    for(let item of data){
        listElements += createLIElement(item);
    }
    return appendToUl(listElements);
}

function updateTaskStatus(id, task) {
    
    if(!id && data.length !== 0) return;

    const value = data.filter((item) => item.id !== id);

    if(value.length  !== 0) {
        const model = {id, task, isCompleted: true };
        const tempData = [...value, model];
        data = tempData.sort((a, b) => a.id - b.id);
    }
    return getListOfTodo();

}


function addTask() {
    const val = document.getElementById('addTask').value;
    if(!val) return;
    const model = {id: data.length + 1, task: val, isCompleted: false };
    const tempData = [...data, model];
    data = tempData;
    document.getElementById('addTask').value = '';
    return getListOfTodo();
}


document.addEventListener('keydown', (e) => {
    if(e.code === 'Enter'){
        addTask();
    }
});




getListOfTodo();


