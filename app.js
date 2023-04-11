// Answer 1
function Adder(num) {
    return function (value) {
        return value + num;
    };
}

// Example usage
const addno = Adder(5);
function addnumber(){
    console.log(addno(prompt("enter no")));// Output: 30
}



// Answer 2
function search(arr, val) {
    if (arr.length === 0) {
        // If  array is empty
        return false;
    } else if (arr[0] === val) {
        // If value found in array
        return true;
    } else {
        // recursive case: search the rest of the array
        return search(arr.slice(1), val);
    }
}

// Example usage
const arr = [1, 2, 3, 4, 5];
function searcharr(){
    console.log(search(arr, 3)); // Output: true
}



// Answer 3

function addParagraph(text) {
    const Para2 = document.createElement("p");
    Para2.textContent = text;
    document.body.appendChild(Para2);
}

// Example usage
function addp(){
    addParagraph(prompt("This is a new paragraph."));
}


// Answer 4
function addListItem(text1) {
    const newLi = document.createElement("li");
    newLi.textContent = text1;
    const myList = document.querySelector("ul");
    myList.appendChild(newLi);
}
// Example usage
function insertitems(){
   addListItem(prompt("insert items")); 
}


/// Answer 5
function BgColor(element, color) {
    element.style.backgroundColor = color;
}

// Example usage
const myElement = document.getElementById("my-element");
BgColor(myElement, "red");
// Answer 6
function Students(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
}

// Example usage
function addStudent(){
    let st={
    name: prompt("Enter Name"),
    age: +prompt("Enter age"),
    className: prompt("Enter Your Class"),
};
Students("Student2", st);
}



// Answer 7
function getstudents(key) {
    const storedItem = localStorage.getItem(key);
    return JSON.parse(storedItem);
}

// // Example usage

function GetStudent(){
const Object2 = getstudents("Student2");
console.log(Object2);
}
// Answer 8

function provideStudent(object) {
    for (const pro in object) {
        if (object.hasOwnProperty(pro)) {
            localStorage.setItem(pro, JSON.stringify(object[pro]));
        }
    }
    const stObject = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        stObject[key] = JSON.parse(localStorage.getItem(key));
    }
    return stObject;
}

function proStudent() {
    let std = {
        name: prompt("Enter Name"),
        rollNo: +prompt("Enter Roll no"),
        teacher: prompt("Enter Teachers Name"),
        className: prompt("Enter Your Class"),
    };
    const storedObject = provideStudent(std);
    console.log(storedObject);
}