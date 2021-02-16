const MAIN = document.getElementById('main');
let examplesList = document.getElementsByClassName('adaptive-background');

let oldIndexBlock = 0;

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

function updateOpacityBlock(oldIndexBlock, newIndexBlock){
    examplesList.item(oldIndexBlock).style.opacity = '0.0';
    examplesList.item(newIndexBlock).style.opacity = '1.0';
    return newIndexBlock;
}
function updateColorBlock(){
    let indexBlock = getIndexBlock();
    if (oldIndexBlock !== indexBlock) {
        oldIndexBlock = updateOpacityBlock(oldIndexBlock, indexBlock);
    }
    if (indexBlock < 0) {
        MAIN.style.backgroundColor = 'white';
    } else {
        MAIN.style.backgroundColor = examplesList.item(indexBlock).getAttribute('data-background');
    }
}
updateOpacityBlock(0,0);
updateColorBlock();

window.addEventListener('scroll',updateColorBlock);

function viewHelp(id) {
    let block = document.getElementById(id);
    block.style.display = 'flex';
}
function closeHelp() {
}