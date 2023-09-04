const form = document.getElementById('maior_numero');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const numeroA = document.getElementById('primeiroNumero');
    const numeroB = document.getElementById('numeroMaior');
    const mensagemSucesso = `Você está certo! O número ${numeroB.value} é maior do que o número ${numeroA.value}.`
    if (numeroA.value < numeroB.value) {
        const containerMensagemSucesso = document.querySelector(`.success_message`);
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        numeroA.value = '';
        numeroB.value = '';
        numeroB.classList.remove('error');
        document.querySelector(`.error_message`).style.display = 'none';
    } else {
        numeroB.style.border = '1px solid red';
        document.querySelector(`.error_message`).style.display = 'block'
        numeroB.classList.add('error');
        document.querySelector(`.error_message`).style.display = 'block';
    }

})

numeroB.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formValido = validaForm(numeroA, numeroB);

    if (!formValido) {
        numeroB.classList.add('error');
        document.querySelector(`.error_message`).style.display = 'block';
    } else {
        numeroB.classList.remove('error');
        document.querySelector(`.error_message`).style.display = 'none';
    }
})