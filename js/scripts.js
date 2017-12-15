add.addEventListener('click', function () {

    var inputElem = document.getElementById('list'),
        newElem = document.createElement('li'),
        number = inputElem.getElementsByTagName('li');

    newElem.innerHTML = 'item ' + number.length;

    inputElem.appendChild(newElem);
});