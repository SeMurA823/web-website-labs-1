let callModalWindow = (name) => {
    if (name === null) return;
    alert(name);
    localStorage.setItem('user',name);
    document.getElementById('user-name').textContent = name;
}

let callModalWindowByInput = () => {
    callModalWindow(document.getElementById('input-name').value);
}

let callModalWindowByPrompt = () => {
    let name = prompt('Введите имя:');
    callModalWindow(name);
}