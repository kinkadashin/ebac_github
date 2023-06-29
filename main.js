$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault();

        const tarefa = $('#nome-tarefa').val();
        $(`<li class="tarefa">${tarefa}</li>`).appendTo('ul');
        $('#nome-tarefa').val('')
    })

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('finalizada');
    });
})