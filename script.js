const CountDisplay = document.getElementById('count');
let count = 0;

const increase_button = document.getElementById('increment');
increase_button.addEventListener('click', increment_count); 


const decrease_increment = document.getElementById('decrement');
decrease_increment.addEventListener('click', decrement_count);

const reset = document.getElementById('reset');
reset.addEventListener('click', reset_count);

function updateDisplay(){
    CountDisplay.textContent = count;
}
function increment_count(){
    count++;
    updateDisplay();
}
function decrement_count(){
    if(count > 0){
        count--;
    }
    updateDisplay();
}
function reset_count(){
    count = 0;
    updateDisplay();
}