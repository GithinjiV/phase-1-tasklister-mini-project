document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    createTask(e.target.new_task.value);
    form.reset();
  })
});

function createTask(taskName){
  let li = document.createElement('li');
  li.textContent = taskName;
  let btn = document.createElement('button');
  btn.addEventListener('click', (e)=>{
    e.target.parentNode.remove();
  });
  btn.innerHTML = 'x';
  li.appendChild(btn);
  document.querySelector('#tasks').appendChild(li);
}
