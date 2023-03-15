/**
 * Copyright (c) 2023
 *
 * @file Add copy writes reserved with "pavan kumar upadhyayula, <pavankumarupadhyayula@gmail.com>"
 *
 * */

"use strict";

// Sample data
let data = [
  { id: 1, task: "Bring Milk.", isCompleted: false },
  { id: 2, task: "Go to School.", isCompleted: false },
  { id: 3, task: "Book tickets for movie. ", isCompleted: false },
];

/**
 * Append HTML string to ul by querying '#list'
 *
 * @param {string}: HTML string to append
 * @return {void}
 */
function appendToUl(htmlStr) {
  const element = document.querySelector("#list");
  if (!element) { return "" };
  element.innerHTML = htmlStr;
}

/**
 * Create HTML li element based on passed property values
 *
 * @param {object}: Property object for li element
 * @return {string}: HTML string for li element
 */
function createLIElement(props) {
  return `<li id=${props?.id} onClick='updateTaskStatus(${props?.id}, "${props?.task}")' class='isCompleted-${props.isCompleted}' >  ${props?.task} </li>`;
}

/**
 * Get list of todo items as HTML string by looping through data
 *
 * @return {string}: HTML string to populate ul element
 */
function getListOfTodo() {
  let listElements = "";
  if (!data) { return "" };
  for (let item of data) {
    listElements += createLIElement(item);
  }
  return appendToUl(listElements);
}

/**
 * Update task status in data array and re-render the list
 *
 * @param {number}: Id of task to update
 * @param {string}: Task description
 * @return {void}
 */
function updateTaskStatus(id, task) {
  try {
    if (!id && data.length !== 0) { throw new Error("Invalid ID passed in.") };

    const value = data.filter((item) => item.id !== id);

    if (value.length !== 0) {
      const model = { id, task, isCompleted: true };
      const tempData = [...value, model];
      data = tempData.sort((a, b) => a.id - b.id);
    }
    return getListOfTodo();
  } catch (error) {
    console.error(error);
  }
}

/**
 * Add new task to data array and re-render the list
 *
 * @return {void}
 */
function addTask() {
  try {
    const val = document.getElementById("addTask").value;
    if (!val) { throw new Error("Empty task received.");}

    const model = { id: data.length + 1, task: val, isCompleted: false };
    const tempData = [...data, model];
    data = tempData;
    document.getElementById("addTask").value = "";
    return getListOfTodo();
  } catch (error) {
    console.error(error);
  }
}

// Add 'keydown' event listener to handle Enter keypress to add new task
document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") { addTask(); }
});

// Initial render of todo list
getListOfTodo();