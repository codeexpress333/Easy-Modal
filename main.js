const btn = document.querySelector('.open');
const cross = document.querySelector('.cross');

// Add Event Listener
btn.addEventListener('click', () => {
    document.querySelector('.container').style.display = "block";
});


cross.addEventListener('click', () => {
    document.querySelector('.container').style.display = "none"
});


