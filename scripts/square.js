let elLengthSide = document.getElementById('length-side'); // сторона
let elLengthHeight = document.getElementById('length-height'); // высота
let elSquare = document.getElementById('square-triangle'); // площадь

elSquare.disabled = true;

let editLength = () => {
    elSquare.value = elLengthSide.value * 0.5 * elLengthHeight.value;
}

elLengthSide.addEventListener('change', editLength);
elLengthHeight.addEventListener('change', editLength);

