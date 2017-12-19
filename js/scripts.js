var inputElem = document.getElementById('list'),
    number = inputElem.getElementsByTagName('li');


add.addEventListener('click', function () {

    var newElem = document.createElement('li');
    
    newElem.innerHTML = 'item ' + number.length;

    inputElem.appendChild(newElem);
});