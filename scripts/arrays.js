let array = [
    document.getElementById('arr1'),
    document.getElementById('arr2'),
    document.getElementById('arr3'),
    document.getElementById('arr4'),
    document.getElementById('arr5')
];
let statistic = () => {
    let min = array[0].value, max = array[0].value;
    console.log(array[0].value)
    for (let i = 0; i < array.length; i++) {
        if (min > array[i].value) min = array[i].value;
        if (max < array[i].value) max = array[i].value;
    }
    document.getElementById('max-arr').textContent = max;
    document.getElementById('min-arr').textContent = min;
}
