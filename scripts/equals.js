let strCompare = () => {
    let str1 = document.getElementById('str1').value;
    let str2 = document.getElementById('str2').value;
    let result = document.getElementById('compare');
    if (str1 === str2) result.textContent = '=='
    else result.textContent = '!=';
}

document.getElementById('str1').addEventListener('change',strCompare);
document.getElementById('str2').addEventListener('change',strCompare);