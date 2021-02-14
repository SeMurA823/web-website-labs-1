function openScreenSaver() {
    let screen = document.getElementById('screensaver-window');
    let username;
    if ((username = localStorage.getItem('user'))!==null)
        document.getElementById('window-username').textContent = username;
    document.getElementById('window-date').textContent = (new Date()).toDateString();
    screen.style.display = 'flex'
    screen.addEventListener('click',closeScreenSaver);
}
function closeScreenSaver() {
    let screen = document.getElementById('screensaver-window');
    screen.style.display = 'none';
    screen.removeEventListener('click',closeScreenSaver);
    console.log('close');
}