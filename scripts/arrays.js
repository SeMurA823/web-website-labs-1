let array = [
    
];
//подсчёт максимума/минимума
function statistic() {
    let max, min;
    if (array.length !== 0) {
        min = Number(array[0].value);
        max = Number(array[0].value);
        for (let i = 1; i < array.length; i++) {
            console.log(Number(array[i].value));
            if (!array[i].validity.valid) continue;
            if (min > Number(array[i].value)) min = Number(array[i].value);
            if (max < Number(array[i].value)) max = Number(array[i].value);
        }
    } else {
        max = 0;
        min = 0;
    }
    document.getElementById('max-arr').textContent = max;
    document.getElementById('min-arr').textContent = min;
}
//проверка валидности элемента
function validElement() {
    if (Number(this.value) === NaN) {
        this.classList.add('array-item__input_invalid');
    }
}
//Удаления элемента из массива
function removeArrElement() {
    array.splice(
        array.indexOf(
            this.form.querySelector('.array-item__input')),1
        );
    this.form.remove();
    statistic();
}
function addArrElement() {
    //блок
    let div = document.createElement('form');
    div.classList.add('array-item');

    let input = document.createElement('input');
    input.type = 'number';
    input.classList.add('array-item__input');
    input.placeholder = 0;
    input.addEventListener('change', statistic);
    array.push(input);

    let deleteBTN = document.createElement('button');
    deleteBTN.classList.add('array-item__deleteBtn');
    deleteBTN.onclick = removeArrElement;

    div.appendChild(input);
    div.appendChild(deleteBTN);

    document.getElementById('arrays-items').appendChild(div);

}

function validArrElement() {
    let arrElement = document.getElementsByClassName('array-item');
    for (let i = 0; i < arrElement; i++) {
        if (Number(arrElement.item(i).value) === NaN) {
            arrElement.item(i).classList.add('array-item__input_invalid');
        }
    }
}

