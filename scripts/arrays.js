let array = [
    document.getElementById('arr1'),
    document.getElementById('arr2'),
    document.getElementById('arr3'),
    document.getElementById('arr4'),
    document.getElementById('arr5')
];
let statistic = () => {
    let min = Number(array[0].value), max = Number(array[0].value);
    console.log(array[0].value)
    for (let i = 1; i < array.length; i++) {
        if (min > Number(array[i].value)) min = Number(array[i].value);
        if (max < Number(array[i].value)) max = Number(array[i].value);
    }
    document.getElementById('max-arr').textContent = max;
    document.getElementById('min-arr').textContent = min;
}
