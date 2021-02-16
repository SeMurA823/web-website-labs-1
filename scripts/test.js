class Question {
    constructor(text, answerList) {
        this.text = text;
        this.answerList = answerList;
    }
    printInPage(answers) {

        let setRadioBTN = this.isSimpleQuestion();
        for (let i = 0; i < this.answerList.length; i++) {
            let tmp = this.answerList[i];
            let randomIndex = Math.floor(Math.random() * this.answerList.length);
            this.answerList[i] = this.answerList[randomIndex];
            this.answerList[randomIndex] = tmp;
        }
        let nameGroup = 'ans-' + questionsList.indexOf(this);
        for (let i = 0; i < this.answerList.length; i++) {
            let answerBlock = document.createElement('div');
            answerBlock.className = 'answers__block';
            //кнопка
            let input = document.createElement('input');
            input.type = (setRadioBTN)?'radio':'checkbox';
            input.name = nameGroup;
            input.classList.add('answer__' + input.type);
            input.id = 'ans-' + questionsList.indexOf(this) + '-' + i;
            //надпись
            let label = document.createElement('label');
            label.htmlFor = input.id;
            label.classList.add('answer__label');
            label.textContent = this.answerList[i].text;

            answerBlock.appendChild(input);
            answerBlock.appendChild(label);
            answers.appendChild(answerBlock);
        }

    }
    isSimpleQuestion(){
        let countCorrectAnswer = 0;
        for (let i = 0; i < this.answerList.length; i++){
            if (this.answerList[i].correct) countCorrectAnswer++;
            if (countCorrectAnswer > 1) return false;
        }
        return true;
    }

}

class Answer {
    constructor(text, correct = false) {
        this.text = text;
        this.correct = correct;
        this.select = false;
    }
}

let questionsList = [
    new Question(
        "Как создать новый массив в JavaScript?",
        [
            new Answer('var colors = "yellow", "purple", "blue"'),
            new Answer('var colors = (1:"yellow", 2:"purple", 3:"blue")'),
            new Answer('var colors = ["yellow", "purple", "blue"]', true)
        ]
    ),
    new Question (
        "Как округляется число 3.14 до ближайшего целого числа?",
        [
            new Answer('round(3.14)'),
            new Answer('Math.rnd(3.14)'),
            new Answer('Math.round(3.14)',true)
        ]
    ),
    new Question (
        "Правильный синтаксис WHILE цикла",
        [
            new Answer('while(i = 0; i < 10; i++)'),
            new Answer('while(true)', true),
            new Answer('while(i > 0)', true)
        ]
    ),
    new Question(
        "JavaScript и Java это одно и тоже?",
        [
            new Answer('Да'),
            new Answer('Нет', true)
        ]
    ),
    new Question(
        "Как вызвать функцию \"myFunction\"?\n",
        [
            new Answer('call myFunction'),
            new Answer('call myFunction()'),
            new Answer('myFunction()', true)
        ]
    ),
    new Question(
        "Коллекция ключ/значение",
        [
            new Answer('map', true),
            new Answer('set'),
            new Answer('array'),
            new Answer('stack')
        ]
    ),
    new Question(
        "Правильный синтаксис цикла FOR",
        [
            new Answer('for (i = 0; i < 10; i++)', true),
            new Answer('for (i = 0;;i--', true),
            new Answer('for (true)'),
            new Answer('for (var j in arr)')
        ]
    ),
    new Question(
        "Метод, позволяющий вызывать функцию регулярно, повторяя вызов через определённый интервал времени",
        [
            new Answer('setTimeout'),
            new Answer('setInterval', true),
            new Answer('delay')
        ]
    ),
    new Question(
        "Правильный способ задания строки",
        [
            new Answer("'text'",true),
            new Answer('"text"', true),
            new Answer('/*text*/'),
            new Answer('/text/')
        ]
    ),
    new Question(
        "Вид коллекции: «множество» значений (без ключей)," +
        " где каждое значение может появляться только один раз",
        [
            new Answer("map"),
            new Answer("array"),
            new Answer("set", true)
        ]
    )
];

function randomListQuestions(questionsList){
    for (let i = 0; i < questionsList.length; i++) {
        let tmp = questionsList[i];
        let randomIndex = Math.floor(Math.random() * questionsList.length);
        questionsList[i] = questionsList[randomIndex];
        questionsList[randomIndex] = tmp;
    }
}

function printQuestions(questionsList) {
    //блок теста
    let testBlock = document.getElementById('test-content');
    for (let i = 0; i < questionsList.length; i++){
        let qBlock = document.createElement('div');
        qBlock.classList.add('question');
        // заголовок
        let h3 = document.createElement('h3');
        h3.classList.add('question__h');
        h3.textContent = 'Вопрос ' + (i + 1);
        //баллы за вопрос
        let spanPoints = document.createElement('span');
        spanPoints.classList.add('question__points');
        spanPoints.id = 'point-' + i;
        //вопрос
        let p = document.createElement('p');
        p.classList.add('question__p');
        p.textContent = questionsList[i].text;
        //блок ответов
        let answerblock = document.createElement('div');
        answerblock.classList.add('answers');
        answerblock.id = 'answers-' + i;
        //печать вариантов ответа
        questionsList[i].printInPage(answerblock);
        h3.appendChild(spanPoints);
        qBlock.appendChild(h3);
        qBlock.appendChild(p);
        qBlock.appendChild(answerblock);
        testBlock.appendChild(qBlock);
    }
}
printQuestions(questionsList);

let checkAnswer = () => {
    let correctAnswers = 0, factAnswers = 0;
    let testBlock = document.getElementById('test-content');
    //итерация по вопросам
    for (let i = 0; i < testBlock.children.length; i++) {
        let answers = document.getElementById('answers-' + i)
        let correctAnswersInQuestion = 0, factAnswersInQuestion = 0;
        //итерация по вариантам ответа
        for (let j = 0; j < answers.children.length; j++) {
            let input = document.getElementById('ans-' + i + '-' + j);
            input.disabled = true;
            if (input.checked) {
                if (questionsList[i].answerList[j].correct) {
                    input.parentElement.style.backgroundColor = 'LightGreen';
                    factAnswersInQuestion++;
                } else {
                    input.parentElement.style.backgroundColor = 'Coral';
                }
            }
            if (questionsList[i].answerList[j].correct) correctAnswersInQuestion++;
        }
        document.getElementById('point-' + i).textContent =
            '(' +
            factAnswersInQuestion +
            '/' +
            correctAnswersInQuestion +
            ')';
        correctAnswers += correctAnswersInQuestion;
        factAnswers += factAnswersInQuestion;
    }
    let btn = document.getElementById('test-btn');
    btn.textContent = 'Повторить';
    btn.onclick = resetTest;
    document.getElementById('test-result').innerHTML =
        'Результат: <span class="test__result-points">' +
        factAnswers +
        '/' +
        correctAnswers +
        '</span>';
}
let resetTest = () => {
    document.getElementById('test-content').innerHTML = '';
    let btn = document.getElementById('test-btn');
    btn.textContent = 'Готово';
    btn.onclick = checkAnswer;
    document.getElementById('test-result').innerHTML = '';
    randomListQuestions(questionsList);
    printQuestions(questionsList);
}