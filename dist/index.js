"use strict";
function alerta() {
    let a = 'ouvindo musiquinhas';
    alert(`${a} `);
    const button = document.querySelector('input#button');
    const page = document.getElementsByTagName('body');
    if (button !== null) {
        page.style.backgroundColor = 'black';
    }
}
addEventListener('button', alerta);
//# sourceMappingURL=index.js.map