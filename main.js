
let changeMainHTML = (change) => {
    main = document.getElementsByTagName('main')[0];
    main.innerHTML = change;
}

let miTest = (e) => {
    let xhr = new XMLHttpRequest();
    const url = e.target.href;
    let page;
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState !== 4) return;
        if (this.status >= 200 && this.status < 300) {
            changeMainHTML(this.responseText)
        }
    });
    xhr.open('GET', url, true);
    xhr.send();
    return page;
}

window.onload = () => {
    let test = document.getElementById('test');
    test.addEventListener('click', (e) => {
        e.preventDefault(); 
        miTest(e);
    });
}