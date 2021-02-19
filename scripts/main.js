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

// словарь подсказок
let mapHelpText = new Map();
mapHelpText.set('modal-window',
    "Для реализации модального окна использовался метод 'alert'," +
    "для сохранения имени в локальное хранилище (localStorage.setItem('user',name))."
);
mapHelpText.set('triangle',
    "Для вычисления применяются алгебраические операции / и *. " +
    "Для начала вычисления срабатывает по событию 'change' в полях ввода"
);
mapHelpText.set('conditional-operator',
    "Для вычисления применяются операторы === и !==. " +
    "Для начала вычисления, срабатывает по событию 'change' в полях ввода"
);
mapHelpText.set('arrays',
    "В массиве элементов находится минимальный и максимальный элемент " +
    "при помощи алгоритма поиска min и max в массиве. " +
    "Для начала вычисления, срабатывает по событию 'click' на кнопку"
);
mapHelpText.set('timer',
    "Для реализации таймера применяется функция timeId = setInterval(/*функция*/,/*интервал*/), " +
    "циклически вызывающая функцию. " +
    "Для остановки таймера использована clearInterval(timeId), останавлиющая циклическое выполнение функции. " +
    "Для сброса таймера обнуляется значение времени"
);
mapHelpText.set('test',
    "Для реализации теста использовалась методы DOM: document.createElement(/*тег*/). " +
    "Для реализации хранения вопросов и ответов используется массив вопросов и соответственно ответов к ним. " +
    "Для реализации проверки ответов, циклом итерируемся по представлению ответов и самим ответам, если ответ не верный, " +
    "то ответ \"краснеет\", иначе \"зеленеет\""
)
mapHelpText.set('screensaver',
    "Для реализации заставки использовалось изменение стиля припомощи своств элемента. " +
    "Для запуска заставки использовалась событие 'click' по кнопке. " +
    "Для остановки заставки использовалась событие 'click' по области документа"
);

function viewHelp(element) {
    let id = element.parentNode.parentElement.id;
    document.getElementById('help').style.display = 'flex';
    document.getElementById('help-text').textContent = mapHelpText.get(id);
}

function closeHelp() {
    document.getElementById('help').style.display = 'none';
}
