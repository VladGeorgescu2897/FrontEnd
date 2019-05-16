function clockUpdate() {
    const date = new Date();
    //const time = date.toLocaleTimeString(window.navigator.language, { hour12: false });
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    document.getElementById('clock1').textContent = "" + hour + ":" + minute + ":" + seconds;
    //document.getElementById('clock2').textContent = time;
}