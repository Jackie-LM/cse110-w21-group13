/** Toggle focus mode: remove task list component and only show the Pomodoro timer */
/** The function is keep track of focus tasks and check if all the
 * tasks are complete.
  */
function toggleState() {
    // elements -- popup button, task list div, pomodoro timer div, focus task
    // const popUpBtn = document.getElementById('popup-button');
    const taskListDiv = document.getElementById('task-list');
    const pomoDiv = document.getElementById('pomodoro-timer');
    const focusTask = document.getElementById('focus-task');
    // popUpBtn.classList.toggle('state');
    taskListDiv.classList.toggle('state');
    pomoDiv.classList.toggle('state');
    focusTask.classList.toggle('state');
    if (localStorage.getItem('state') === 'default') {
        localStorage.setItem('state', 'focus');
    } else {
        localStorage.setItem('state', 'default');
        const title = document.getElementById('select-focus');
        if (title.innerHTML === 'All tasks complete!') {
            title.innerHTML = '';
        }
    }
}

const focusBtn = document.getElementById('focus-button');
focusBtn.addEventListener('click', toggleState);
