$(document).ready(function() {
    $('#carrossel').slick({
        autoplay: true,
    });

    $('.menu-burger').click(function(){
        $('nav').slideToggle();
    })

    $('#fone').mask('(00)00000-0000', {
        placeholder: '(21)99999-9999'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '999.999.999-99'
    })

    $('#cep').mask('00000-000', {
        placeholder: '99999-999'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            fone: {
                required: false
            },
            cpf: {
                required: false
            },
            endereco: {
                required: false
            },
            cep: {
                required: false
            }
        }, messages: {
            nome: 'Por favor, insira o seu nome.'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})