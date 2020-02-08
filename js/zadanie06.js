document.addEventListener('DOMContentLoaded', function() {
    
    const button_1 = document.querySelector('#button-1');
    const button_2 = document.querySelector('#button-2');
    const button_3 = document.querySelector('#button-3');
    const shoppingArray = document.querySelector('#shopping-list');

    button_1.addEventListener('click', function() {
        const liElement = document.createElement('li');
        liElement.innerHTML = 'chleb';
        shoppingArray.appendChild(liElement);
    });

    button_2.addEventListener('click', function() {
        shoppingArray.removeChild(shoppingArray.children[shoppingArray.children.length-1]);
    });

    button_3.addEventListener('click', function() { 
        shoppingArray.appendChild(shoppingArray.children[1].cloneNode(true));
    });

});