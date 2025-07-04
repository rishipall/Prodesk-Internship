function style() {
    var day = document.querySelector(".day");
    day.addEventListener("click", function () {
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {

            day.innerHTML = "🌙";
        } else {
            day.innerHTML = "☀️";
        }
    })
    var hidebar = document.querySelector(".hide");
    var sidebar = document.querySelector(".sidebar");
    hidebar.addEventListener("click", function () {
        sidebar.classList.toggle("hidebar");
        if (sidebar.classList.contains("hidebar")) {
            hidebar.innerHTML = "☰";
        } else {
            hidebar.innerHTML = "✖";
        }

    })
}
style();

var todo = document.querySelector('.one .todo')
var doing = document.querySelector('.one .doing')
var done = document.querySelector('.one .done')
var addtask = document.querySelector('.addtask');
// todolist = [];
// doinglist = [];
// donelist = []; 
// let  newtaskcreate =  "";
// addtask.addEventListener('click',()=>{
//     newtaskcreate = prompt("Enter your task");
//     todo.push(newtaskcreate);
//     const list = document.querySelector('.task')
//     todo.forEach(element => {
//         const div = document.createElement('div');
//         div.textContent = element;
//         todo.appendChild(div);
//     });


// })
var todo = document.querySelector('.one .todo');
var doing = document.querySelector('.one .doing');
var done = document.querySelector('.one .done');
var todoList = []; // This will store the tasks
var doingList = []; // This will store the tasks in progress
var doneList = []; // This will store the completed tasks
 let newtaskcreate = ""
var addtask = document.querySelector('.addtask');
addtask.addEventListener('click', () => {
     newtaskcreate = prompt("Enter your task");
    let numberoftasks = prompt("Enter the number of subtasks");
    let donetasks = prompt("Enter the number of completed subtasks");
    if (newtaskcreate  && donetasks && numberoftasks) {
        // Clear the column before re-rendering
        if (donetasks < numberoftasks && donetasks == 0) {
            todoList.push(newtaskcreate);
            const div = document.createElement('div');
              const small = document.createElement('small');
            div.textContent = newtaskcreate;
            small.textContent = `${donetasks} of ${numberoftasks} subtasks`;
            div.className = 'task-item'; 
            todo.appendChild(small)// Optional: for styling
            div.appendChild(small); // This puts <small> inside <div>.
            todo.appendChild(div);
            small.style.color = 'red';
        }
        else if (donetasks < numberoftasks) {
            doingList.push(newtaskcreate);
            const div = document.createElement('div');
              const small = document.createElement('small');
              small.style.color = 'yellow'; // Optional: for styling

            div.textContent = newtaskcreate;
            small.textContent = `${donetasks} of ${numberoftasks} subtasks`;
            div.className = 'task-item';
            doing.append(small) // Optional: for styling
            div.appendChild(small); // This puts <small> inside <div>.
            doing.appendChild(div);


        }
       else if(numberoftasks == donetasks) {
            const div = document.createElement('div');
            const small = document.createElement('small');
            doneList.push(newtaskcreate);
            div.textContent = newtaskcreate;
            small.textContent = `${donetasks} of ${numberoftasks} subtasks`;
            div.className = 'task-item'; // Optional: for styling
            done.appendChild(small);
            div.appendChild(small); // Add <small> inside <div>
            done.appendChild(div);
            small.style.color = 'green';
        }
        else {
            alert("Invalid input. Please enter valid task details.");
        }
    }
});


