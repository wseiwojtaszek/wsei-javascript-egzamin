const getButtons = document.querySelectorAll('button');
const getContainer = document.querySelector('#container');

getButtons.forEach(one => {
     one.addEventListener('click', function() {
          getContainer.innerHTML = this.dataset.text;
      });
});