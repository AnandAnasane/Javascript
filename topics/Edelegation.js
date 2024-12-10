// Event delegation is a technique where a parent element handles events for its child elements by using event bubbling.


document.getElementById('parent').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'BUTTON') {
        console.log(`Button clicked: ${event.target.textContent}`);
    }
});
