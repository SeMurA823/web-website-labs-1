const MAIN = document.getElementById('main');
let examplesList = document.getElementsByClassName('adaptive-background');
let offsetExamplesList = [];
for (let i = 0; i < examplesList.length; i++){
    offsetExamplesList.push(examplesList.item(i).offsetTop);
}
console.log(offsetExamplesList)

let oldIndexBlock = 0;

updateColorBlock();

function getIndexBlock(){
    console.log(window.pageYOffset);
    let indexBlock = 0;
    for (let i = 0; i < examplesList.length; i++) {
        console.log(examplesList.item(i).clientHeight);
        if (window.pageYOffset + window.innerHeight / 2 >= examplesList.item(i).offsetTop
            && window.pageYOffset + window.innerHeight / 2 <= examplesList.item(i).offsetTop + examplesList.item(i).clientHeight) {
            console.log("I = " + i);
            return i;
        }
    }
    return -1;
}


function updateColorBlock(){
    let indexBlock = getIndexBlock();
    if (oldIndexBlock !== indexBlock) {
        examplesList.item(oldIndexBlock).style.opacity = '0.0';
        examplesList.item(indexBlock).style.opacity = '1.0';
        oldIndexBlock = indexBlock;
    }
    if (indexBlock < 0) {
        MAIN.style.backgroundColor = 'white';
    } else {
        MAIN.style.backgroundColor = examplesList.item(indexBlock).getAttribute('data-background');
    }
}

window.addEventListener('scroll',()=>{
    updateColorBlock();
});
