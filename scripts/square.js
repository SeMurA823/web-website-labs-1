let elLengthSide = document.getElementById('length-side'); // сторона
let elLengthHeight = document.getElementById('length-height'); // высота
let elSquare = document.getElementById('square-triangle'); // площадь

elSquare.disabled = true;

let editLength = () => {
    if (Number(elLengthHeight.value) < 0 || Number(elLengthSide.value) < 0){
        elSquare.value = 0;
        return;
    }
    elSquare.value = Number(elLengthSide.value) * 0.5 * Number(elLengthHeight.value);
}

elLengthSide.addEventListener('change', editLength);
elLengthHeight.addEventListener('change', editLength);

