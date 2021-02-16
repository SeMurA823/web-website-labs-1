
let callModalWindow = (name) => {
    if (name === null) return;
    if (name.length === 0) return;
    alert(name);
    localStorage.setItem('user',name);
    checkUserName();
}
let checkUserName = () => {
    let name = localStorage.getItem('user');
    if (name !== null) {
        document.getElementById('user-name').textContent = name;
        document.getElementById('user-item').style.display = 'inline-block';
    }
}

checkUserName();

let callModalWindowByInput = () => {
    callModalWindow(document.getElementById('input-name').value);
}

let callModalWindowByPrompt = () => {
    let name = prompt('Введите имя:');
    callModalWindow(name);
}