$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const inputTarefa = $('#nome-tarefa').val();
        $(`<li>${inputTarefa}</li>`).appendTo('ul');
        $('#nome-tarefa').val('');
    })
    $('ul').on('click', 'li', function() {
        alert('tarefa concluida');
        $(this).addClass("concluida");
    })
})


/* const form = document.getElementById('maior_numero');

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

$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoNovaImagem = $('#imagem-nova').val();
        const novoItem =$('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="imagem-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver Imagem tamanho Real">
                Ver Imagem tamanho Real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#imagem-nova').val('');
    })

}) */