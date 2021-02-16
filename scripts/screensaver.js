function ScreenSaverNone(){
    let screen = document.getElementById('screensaver-window');
    screen.style.transform = 'translateY(-' + screen.clientHeight + ')';
    screen.style.display = 'none';
}
function ScreenSaverFlex(){
    let screen = document.getElementById('screensaver-window');
    screen.style.display = 'flex';
    screen.style.transform = 'translateY(' + screen.clientHeight + ')';
    let username;
    if ((username = localStorage.getItem('user'))!==null)
        document.getElementById('window-username').textContent = username;
    document.getElementById('window-date').textContent = (new Date()).toDateString();
    screen.addEventListener('click',ScreenSaverNone);

}