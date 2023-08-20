function alerta (): void {
    let a: string = 'ouvindo musiquinhas';
    alert(`${a} `);
    const button: any = document.querySelector('input#button');
    const page: any = document.getElementsByTagName('body');
    if (button !== null) {
        page.style.backgroundColor = 'black';
    }
}

addEventListener('button', alerta);