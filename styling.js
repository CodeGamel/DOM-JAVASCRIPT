function changeColor() {
    const box = document.getElementById('box');
    box.style.backgroundColor = box.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
}

// Additional hover effect
const hoverButton = document.getElementById('hover-button');

hoverButton.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});

hoverButton.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});