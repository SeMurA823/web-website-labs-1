let elLengthSide = document.getElementById('length-side'); // сторона
let elLengthHeight = document.getElementById('length-height'); // высота
let elSquare = document.getElementById('square-triangle'); // площадь

elSquare.disabled = true;

let editLength = () => {
    if (elLengthHeight.value < 0 || elLengthSide.value < 0){
        elSquare.value = 0;
        return;
    }
    elSquare.value = elLengthSide.value * 0.5 * elLengthHeight.value;
}

elLengthSide.addEventListener('change', editLength);
elLengthHeight.addEventListener('change', editLength);

