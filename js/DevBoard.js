// // first child
// document.getElementById('first-card')
// .addEventListener('click', function(){
//     const childOne = document.getElementById('comment-1');
//     childOne.style.display = 'block';
// });
// // second child
// document.getElementById('second-card')
// .addEventListener('click', function(){
//     const childOne = document.getElementById('comment-1');
//     childOne.style.display = 'block';
// });
// // chird child
// document.getElementById('chird-card')
// .addEventListener('click', function(){
//     const childOne = document.getElementById('comment-1');
//     childOne.style.display = 'block';
// });
// // fourth child
// document.getElementById('first-card')
// .addEventListener('click', function(){
//     const childOne = document.getElementById('comment-1');
//     childOne.style.display = 'block';
// });
// // fifth child
// document.getElementById('first-card')
// .addEventListener('click', function(){
//     const childOne = document.getElementById('comment-1');
//     childOne.style.display = 'block';
// });
// // sixth child
// document.getElementById('first-card')
// .addEventListener('click', function(){
//     const childOne = document.getElementById('comment-1');
//     childOne.style.display = 'block';
// });

const completedBtn = document.querySelectorAll('.completed-btn');
const remainingTask = document.getElementById('task-assign');
const taskCullector = document.getElementById('task-cullector');
for(const button of completedBtn){
    button.addEventListener('click',function(event){
        event.target.disabled=true;
        const availableTask = parseInt(remainingTask.innerText)-1
        remainingTask.innerText = availableTask;
        const totalCullect = parseInt(taskCullector.innerText)+1;
        taskCullector.innerText = totalCullect;


    })
};

// Get the current date
const currentDate = new Date();

// Format the date (e.g., "March 3, 2025")
const formattedDate = currentDate.toLocaleDateString('en-US', {   
    year: 'numeric',   
    month: 'short',   
    day: 'numeric'     
});

const formattedDay = currentDate.toLocaleDateString('en-US', {
    weekday: 'short',
})
document.getElementById('current-date').innerText = formattedDate;
document.getElementById('current-day').innerText =formattedDay + ",";




