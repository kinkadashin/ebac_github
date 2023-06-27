const form = document.getElementById('form');

function validarNum(n1, n2) {
    if (n2 > n1) {
        return true
    } else {
        return false
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let numeroA = document.getElementById('number1').value;
    let numeroB = document.getElementById('number2').value;
    const mensagemSucesso = "Parabéns, tente manter o número B maior, para que o sistema dê certo."
    const mensagemErro = "Diminua o número A até que o B seja maior"
    const resultado = validarNum(parseInt(numeroA), parseInt(numeroB))
    const containerMensagemSucesso = document.querySelector('.message-aprove');
    const containerMensagemErro = document.querySelector('.message-error')

    if (resultado) {
        containerMensagemErro.style.display = 'none';
        
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    } else {
        containerMensagemSucesso.style.display = 'none';
        
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }
})