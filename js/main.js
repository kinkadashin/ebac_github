$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true,
                minWords: 2
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            cep: {
                required: true,
            },
            endereco: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'E-mail é obrigatório.',
            telefone: 'Telefone é obrigatório.',
            cpf: 'CPF é obrigatório.',
            cep: 'CEP é obrigatório.',
            endereco: 'Endereço completo é obrigatório.',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })
})

function validaNome(nomeCompleto) {
    const nomeArray = nomeCompleto.split(' ')
    return nomeArray.length >= 2
}